import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getProdutos() {
  return prisma.produto.findMany({
    include: {
      categoria: true,
    }
  });
}
