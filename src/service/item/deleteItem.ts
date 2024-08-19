import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function deleteItem(id: string) {
  try {
    await prisma.item.delete({
      where: { id },
    });
  } catch (error) {
    console.error('Erro ao excluir item:', error);
    throw error;
  }
}
