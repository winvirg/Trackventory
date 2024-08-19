import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getVendas() {
  return await prisma.venda.findMany({
    include: {
      item: true,
      vendedor: true,
    },
  });
}
