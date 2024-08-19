import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getLoteById(id: string) {
  try {
    return await prisma.lote.findUnique({
      where: { id },
      include: { produto: true }, // Incluindo o produto para exibir informações relacionadas
    });
  } catch (error) {
    console.error('lote não encotrado, verifique ID:', error);
    throw error;
  }
}
