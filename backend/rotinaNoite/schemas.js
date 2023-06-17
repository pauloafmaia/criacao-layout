const { checkSchema } = require("express-validator");

const rotinaNoiteSchema = () =>
  checkSchema({
    rotina: {
      isEmpty: {
        negated: true,
        errorMessage: "Rotina é obrigatório",
      },
    },
  });

module.exports = { rotinaNoiteSchema };
