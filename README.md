# Passos para inicialização de um servidor Node.js com TypeScript e Express

(Básico)
# 1. Crie um repositório local e no github e crie este arquivo README.md
# 2. Abra o terminal e insira os seguintes comandos:
## npm init -y | (cria o documento básico package.json)
## npm install express | (instala o Express para rotas de API's)
## npm install -D typescript @types/node @types/express ts-node nodemon | (instala: typescript, types do node, types do express, ts-node para executar TS diretamente do Node e nodemon para reiniciar o servidor automaticamente quando o código for alterado)
## npx tsc --init | (cria o arquivo de configuração do TypeScript tsconfig.json)
# 3. Agora na pasta principal crie uma pasta chamada src/, dentro crie um arquivo index.ts e insira o código a baixo:
## -----
import Express = require("express");

const app = Express();
app.use(Express.json());

app.get('/', (req, res) => {
  res.send('Servidor rodando com TypeScript!');
});
const port = 3000

app.listen(port, () => console.log(`Servidor rodando na porta http://localhost:${port}`));
## -----
# 4. Agora dentro do package.json em "scripts" insira os seguintes comandos para facilitar testes e execuções:
##
"dev": "nodemon --exec ts-node src/index.ts",
"test": "echo \"Error: no test specified\" && exit 1",
"build": "tsc",
"build:run": "tsc && nodemon dist/index.js"
### Obs: Execute os comandos a cima da seguinte forma:
#### npm run dev
#### npm run test
Etc...

### O jest e coverage precisa ser instalado caso tenha interesse em executar testes e visualizar falhas
(opcional) - "test": "jest",
(opcional) - "test:cov": "rimraf coverage & jest --clearCache & jest --coverage & echo coverage/lcov-report/index.html"
# 5. Abra o terminal e execute o seguinte comando para iniciar o servidor:
## npm run dev
# 6. No seu navegador pesquise por: localhost:3000 (ou a porta que você definiu em "port")
## Para cancelar, no terminal aperte CTRL + C