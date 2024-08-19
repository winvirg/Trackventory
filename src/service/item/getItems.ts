import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getItems() {
  try {
    return await prisma.item.findMany({
      include: {
        produto: true,
        venda: true,
      },
    });
  } catch (error) {
    console.error('Erro ao buscar itens:', error);
    throw error;
  }
}
