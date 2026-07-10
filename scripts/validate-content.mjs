import { access, readdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const practicesDir = path.join(root, "src", "content", "practices");
const expected = ["revisao", "carga-massa"];

async function exists(target) {
  try {
    await access(target);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const entries = await readdir(practicesDir, { withFileTypes: true });
  const folders = entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name);

  for (const slug of expected) {
    if (!folders.includes(slug)) {
      throw new Error(`Prática habilitada ausente em src/content/practices/${slug}`);
    }

    const file = path.join(practicesDir, slug, "index.mdx");
    if (!(await exists(file))) {
      throw new Error(`Arquivo obrigatório ausente: ${file}`);
    }
  }

  console.log("Conteúdo habilitado validado com sucesso.");
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});

