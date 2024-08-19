import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getVendaById(cod_venda: string) {
  return await prisma.venda.findUnique({
    where: { cod_venda },
    include: {
      item: true,
      vendedor: true,
    },
  });
}
