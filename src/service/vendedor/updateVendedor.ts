import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function updateVendedor(id: string, nome: string) {
  return prisma.vendedor.update({
    where: { id },
    data: { nome },
  });
}
