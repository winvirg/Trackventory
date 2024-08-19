import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface UpdateLoteData {
  validade?: Date;
  localizacao?: string;
  produto_cod_barras?: string;
}

export async function updateLote(id: string, data: UpdateLoteData) {
  try {
    return await prisma.lote.update({
      where: { id },
      data,
    });
  } catch (error) {
    console.error('Erro ao atualizar lote:', error);
    throw error;
  }
}
