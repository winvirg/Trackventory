import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function updateVenda(
  cod_venda: string,
  valor: number,
  entrega: string,
  endereco?: string,
  vendedor_id?: string
) {
  return await prisma.venda.update({
    where: { cod_venda },
    data: {
      valor,
      entrega,
      endereco,
      vendedor_id,
    },
  });
}
