import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getLotes() {
  try {
    return await prisma.lote.findMany();
  } catch (error) {
    console.error('Erro ao procurar lotes:', error);
    throw error;
  }
}
