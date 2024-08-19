import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getProdutoById(cod_barras: string) {
  return prisma.produto.findUnique({
    where: { cod_barras },
    include: {
      categoria: true,
    }
  });
}
