import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getVendedores() {
  return prisma.vendedor.findMany();
}
