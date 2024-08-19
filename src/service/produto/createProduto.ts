import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createProduto(
  cod_barras: string,
  nome: string,
  preco_custo: number,
  preco_venda: number,
  quantidade: number,
  categoria_cod?: string
) {
  await prisma.produto.create({
    data: {
      cod_barras,
      nome,
      preco_custo,
      preco_venda,
      quantidade,
      categoria_cod,
    },
  });
}
