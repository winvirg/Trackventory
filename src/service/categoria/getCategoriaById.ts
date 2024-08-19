import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getCategoriaById(cod: string) {
  return prisma.categoria.findUnique({
    where: { cod },
  });
}
