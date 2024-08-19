import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function updateItem(
  id: string,
  quantidade?: number,
  valor_unitario?: number,
  produto_cod_barras?: string,
  venda_cod_venda?: string
) {
  try {
    return await prisma.item.update({
      where: { id },
      data: {
        quantidade,
        valor_unitario,
        produto_cod_barras,
        venda_cod_venda,
      },
    });
  } catch (error) {
    console.error('Erro ao atualizar item:', error);
    throw error;
  }
}
