import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getCategorias() {
  return prisma.categoria.findMany();
}
