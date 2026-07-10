import { access, readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const expectedFiles = [
  path.join(root, "dist", "index.html"),
  path.join(root, "dist", "praticas", "revisao", "index.html"),
  path.join(root, "dist", "praticas", "carga-massa", "index.html"),
];

async function assertFile(file) {
  await access(file);
}

async function main() {
  for (const file of expectedFiles) {
    await assertFile(file);
  }

  const home = await readFile(expectedFiles[0], "utf8");
  const revisao = await readFile(expectedFiles[1], "utf8");

  if (!home.includes("Práticas previstas")) {
    throw new Error("A home gerada nao contem a seção principal do catalogo.");
  }

  if (!home.includes("/praticas/revisao/") || !home.includes("/praticas/carga-massa/")) {
    throw new Error("A home gerada nao contem os links esperados para as praticas habilitadas.");
  }

  if (home.toLowerCase().includes("simulador")) {
    throw new Error("A home gerada ainda exibe indicações de simulador na capa.");
  }

  if (!revisao.includes("Revisão") || !revisao.includes("Perguntas conceituais e aplicadas")) {
    throw new Error("A prática Revisao gerada nao contem o conteúdo esperado.");
  }

  if (!revisao.includes("Como organizar o relatório")) {
    throw new Error("A prática Revisao gerada nao contem a orientação de relatório.");
  }

  console.log("Smoke e2e do build concluido com sucesso.");
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
