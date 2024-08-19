import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

export async function createLote(
  validade: Date | string,
  localizacao: string,
  produto_cod_barras: string
) {
  try {
    await prisma.lote.create({
      data: {
        id: uuidv4(),
        validade,
        localizacao,
        produto: {
          connect: { cod_barras: produto_cod_barras }
        }
      },
    });
  } catch (error) {
    console.error('Erro ao criar lote:', error);
    throw error;
  }
}
