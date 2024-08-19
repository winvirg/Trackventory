import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function updateProduto(
  cod_barras: string,
  nome: string,
  preco_custo: number,
  preco_venda: number,
  quantidade: number,
  categoria_cod?: string
) {
  await prisma.produto.update({
    where: { cod_barras },
    data: {
      nome,
      preco_custo,
      preco_venda,
      quantidade,
      categoria_cod,
      data_atualizacao: new Date(),
    },
  });
}
