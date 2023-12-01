
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(cors());


app.post("/item", async (req, res) => {
  const dados = req.body;
  await prisma.item.create({
    data: {
      nome: dados.nome,
    },
  });
  return res.sendStatus(201);
});


app.get("/users", async (req, res) => {
});


app.get("/user/:nome", async (req, res) => {
});


app.listen(port, () => {
  console.log(`Servidor Express rodando na porta ${port}`);
});