const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname);
const ignorar = ["node_modules", ".git", ".next", ".turbo", "out"];

const resultado = [];

function exportarArquivos(dir) {
  const entradas = fs.readdirSync(dir, { withFileTypes: true });

  for (const entrada of entradas) {
    const caminho = path.join(dir, entrada.name);
    const relativo = path.relative(root, caminho);

    if (ignorar.some((ign) => relativo.startsWith(ign))) continue;

    if (entrada.isDirectory()) {
      exportarArquivos(caminho);
    } else {
      try {
        const conteudo = fs.readFileSync(caminho, "utf8");
        resultado.push(`\n\n// ========== ${relativo} ==========\n\n${conteudo}`);
      } catch (err) {
        console.warn(`⚠️ Erro ao ler ${relativo}`);
      }
    }
  }
}

exportarArquivos(root);
fs.writeFileSync("smartopea-frontend-codigos.txt", resultado.join("\n"), "utf8");
console.log("✅ Arquivo 'smartopea-frontend-codigos.txt' gerado com sucesso!");
