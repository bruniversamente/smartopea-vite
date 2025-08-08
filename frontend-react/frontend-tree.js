const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname);
const ignorar = ["node_modules", ".git", ".next", ".turbo", "out"];

const estrutura = [];

function gerarTree(dir, prefixo = "") {
  const entradas = fs.readdirSync(dir, { withFileTypes: true });

  for (const entrada of entradas) {
    const caminho = path.join(dir, entrada.name);
    const relativo = path.relative(root, caminho);

    if (ignorar.some((ign) => relativo.startsWith(ign))) continue;

    if (entrada.isDirectory()) {
      estrutura.push(`${prefixo}${entrada.name}/`);
      gerarTree(caminho, prefixo + "  ");
    } else {
      estrutura.push(`${prefixo}${entrada.name}`);
    }
  }
}

gerarTree(root);
fs.writeFileSync("estrutura-smartopea-frontend.txt", estrutura.join("\n"), "utf8");
console.log("✅ Arquivo 'estrutura-smartopea-frontend.txt' gerado com sucesso!");
