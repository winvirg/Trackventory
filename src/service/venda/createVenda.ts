import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

export async function createVenda(
  valor: number,
  entrega: string,
  endereco?: string,
  vendedor_id?: string
) {
  try {
    const venda = await prisma.venda.create({
      data: {
        cod_venda: uuidv4(),
        valor,
        entrega,
        endereco,
        vendedor_id,
      },
    });
    return venda;
  } catch (error) {
    console.error('Erro ao criar venda:', error);
    throw error;
  }
}
