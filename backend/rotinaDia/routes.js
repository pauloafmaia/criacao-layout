const controller = require("./controller");
const express = require("express");
const router = express.Router();
const schemas = require("./schemas");
const { body, validationResult } = require("express-validator");

router.get("/rotina-dia", async (req, res) => {
  const rotinaDia = await controller.buscarRotinaDia();

  if (rotinaDia.length > 0) {
    res.send(rotinaDia);
  } else {
    res.status(404).send("Rotina diurna não encontrada");
  }
});

router.post("/rotina-dia", schemas.rotinaDiaSchema(), async (req, res) => {
  const result = validationResult(req);
  if (result.errors.length > 0) {
    res.status(400).send({ errors: result.errors.map((erro) => erro.msg) });
  } else {
    const rotinaDia = await controller.criarRotinaDia(req.body);

    res.status(201).send(rotinaDia);
  }
});

router.delete("/rotina-dia/:id", async (req, res) => {
  await controller.deletarRotinaDia(req.params.id);

  const rotinaDia = await controller.buscarRotinaDia();

  res.status(200).send(rotinaDia);
});

module.exports = router;
