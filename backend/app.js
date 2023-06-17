const express = require("express");
const port = process.env.PORT || 4000;
const dia = require("./rotinaDia/routes");
// const noite = require("./rotinaNoite/routes");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(dia);
// app.use(noite);

app.listen(port, function () {
  console.log(`O aplicativo está rodando na porta ${port}`);
});
