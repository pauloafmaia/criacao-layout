const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const buscarRotinaDia = async () => {
  const rotinaDia = await prisma.rotinaDia.findMany();
  return rotinaDia;
};

const criarRotinaDia = async (rotina) => {
  return await prisma.rotinaDia.create({
    data: rotina,
  });
};

const deletarRotinaDia = async (id) => {
  await prisma.rotinaDia.delete({
    where: {
      id: id,
    },
  });
};

module.exports = {
  buscarRotinaDia,
  criarRotinaDia,
  deletarRotinaDia,
};
