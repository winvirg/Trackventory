import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function deleteVenda(cod_venda: string) {
  return await prisma.venda.delete({
    where: { cod_venda },
  });
}
