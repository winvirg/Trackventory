import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

export async function createItem(
    quantidade: number,
    valor_unitario: number,
    produto_cod_barras?: string,
    venda_cod_venda?: string
) {
  try {
    await prisma.item.create({
      data: {
        id: uuidv4(),
        quantidade,
        valor_unitario,
        produto_cod_barras,
        venda_cod_venda,
      }
    });
  } catch (error) {
    console.error('Erro ao criar item:', error);
    throw error;
  }
}
