const controller = require("./controller");
const express = require("express");
const router = express.Router();
const schemas = require("./schemas");
const { body, validationResult } = require("express-validator");

router.get("/rotina-noite", async (req, res) => {
  const rotinaNoite = await controller.buscarRotinaNoite();

  if (rotinaNoite.length > 0) {
    res.send(rotinaNoite);
  } else {
    res.status(404).send("Rotina noturna não encontrada");
  }
});

router.post("/rotina-noite", schemas.rotinaNoiteSchema(), async (req, res) => {
  const result = validationResult(req);
  if (result.errors.length > 0) {
    res.status(400).send({ errors: result.errors.map((erro) => erro.msg) });
  } else {
    const rotinaNoite = await controller.criarRotinaNoite(req.body);

    res.status(201).send(rotinaNoite);
  }
});

router.delete("/rotina-noite/:id", async (req, res) => {
  await controller.deletarRotinaNoite(req.params.id);

  const rotinaNoite = await controller.buscarRotinaNoite();

  res.status(200).send(rotinaNoite);
});

module.exports = router;
