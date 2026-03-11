import Express = require("express");

const app = Express();
app.use(Express.json());

app.get('/', (req, res) => {
  res.send('Servidor rodando com TypeScript!');
});
const port = 3000

app.listen(port, () => console.log(`Servidor rodando na porta http://localhost:${port}`));