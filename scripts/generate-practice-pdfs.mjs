import { createServer } from "node:http";
import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.resolve(projectRoot, "dist");
const publicDownloadsDir = path.resolve(projectRoot, "public", "downloads", "praticas");
const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const practicePdfs = [
  { slug: "revisao", output: "revisao.pdf" },
  { slug: "carga-massa", output: "carga-massa.pdf" },
];

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".woff2": "font/woff2",
};

function getContentType(filePath) {
  return contentTypes[path.extname(filePath)] ?? "application/octet-stream";
}

async function ensureReadable(targetPath) {
  await access(targetPath, constants.R_OK);
}

function createStaticServer(rootDir) {
  return createServer(async (request, response) => {
    try {
      const requestUrl = new URL(request.url ?? "/", "http://127.0.0.1");
      const pathname = decodeURIComponent(requestUrl.pathname);
      const normalizedPath = pathname.endsWith("/") ? `${pathname}index.html` : pathname;
      const absolutePath = path.resolve(rootDir, `.${normalizedPath}`);

      if (!absolutePath.startsWith(rootDir)) {
        response.writeHead(403);
        response.end("Forbidden");
        return;
      }

      const file = await readFile(absolutePath);
      response.writeHead(200, { "Content-Type": getContentType(absolutePath) });
      response.end(file);
    } catch {
      response.writeHead(404);
      response.end("Not found");
    }
  });
}

async function renderPdf(baseUrl, slug, outputFile) {
  const outputPath = path.join(publicDownloadsDir, outputFile);
  const url = `${baseUrl}/praticas/${slug}/`;

  await execFileAsync(chromePath, [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--print-to-pdf-no-header",
    "--virtual-time-budget=5000",
    `--print-to-pdf=${outputPath}`,
    url,
  ]);
}

async function main() {
  await ensureReadable(chromePath);
  await ensureReadable(path.join(distDir, "index.html"));
  await mkdir(publicDownloadsDir, { recursive: true });

  const server = createStaticServer(distDir);
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));

  const address = server.address();
  if (!address || typeof address === "string") {
    throw new Error("Nao foi possivel iniciar o servidor local para gerar os PDFs.");
  }

  const baseUrl = `http://127.0.0.1:${address.port}`;

  try {
    for (const practice of practicePdfs) {
      await renderPdf(baseUrl, practice.slug, practice.output);
    }
  } finally {
    await new Promise((resolve, reject) => server.close((error) => (error ? reject(error) : resolve())));
  }

  await writeFile(
    path.join(publicDownloadsDir, "README.md"),
    [
      "# PDFs das praticas",
      "",
      "Arquivos gerados a partir das paginas HTML do portal.",
      "Para atualizar, execute `npm run build:practice-pdfs`.",
      "",
    ].join("\n"),
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
