const { checkSchema } = require("express-validator");

const rotinaDiaSchema = () =>
  checkSchema({
    rotina: {
      isEmpty: {
        negated: true,
        errorMessage: "Rotina é obrigatório",
      },
    },
  });

module.exports = { rotinaDiaSchema };
