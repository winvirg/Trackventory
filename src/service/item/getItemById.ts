import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getItemById(id: string) {
  try {
    return await prisma.item.findUnique({
      where: { id },
      include: {
        produto: true,
        venda: true,
      },
    });
  } catch (error) {
    console.error('Erro ao buscar item:', error);
    throw error;
  }
}
