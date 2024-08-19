import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function deleteVendedor(id: string) {
  return prisma.vendedor.delete({
    where: { id },
  });
}
