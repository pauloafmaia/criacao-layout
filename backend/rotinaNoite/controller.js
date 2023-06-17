const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const buscarRotinaNoite = async () => {
  const rotinaNoite = await prisma.rotinaNoite.findMany();
  return rotinaNoite;
};

const criarRotinaNoite = async (rotina) => {
  return await prisma.rotinaNoite.create({
    data: rotina,
  });
};

const deletarRotinaNoite = async (id) => {
  await prisma.rotinaNoite.delete({
    where: {
      id: id,
    },
  });
};

module.exports = {
  buscarRotinaNoite,
  criarRotinaNoite,
  deletarRotinaNoite,
};
