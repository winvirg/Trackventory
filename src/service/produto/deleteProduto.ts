import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function deleteProduto(cod_barras: string) {
  await prisma.produto.delete({
    where: { cod_barras },
  });
}
