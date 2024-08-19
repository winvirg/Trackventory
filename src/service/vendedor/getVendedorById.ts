import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getVendedorById(id: string) {
  return prisma.vendedor.findUnique({
    where: { id },
  });
}
