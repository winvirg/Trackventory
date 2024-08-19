import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function deleteLote(id: string) {
  try {
    await prisma.lote.delete({
      where: { id },
    });
  } catch (error) {
    console.error('Erro ao excluir lote:', error);
    throw error;
  }
}
