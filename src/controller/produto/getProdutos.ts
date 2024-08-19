import { Request, Response } from 'express';
import { getProdutos } from '../../service/produto/getProdutos';

export async function getProdutosController(req: Request, res: Response) {
  try {
    const produtos = await getProdutos();
    const produtosComNomeCategoria = produtos.map(produto => ({
      cod_barras: produto.cod_barras,
      nome: produto.nome,
      preco_custo: produto.preco_custo,
      preco_venda: produto.preco_venda,
      quantidade: produto.quantidade,
      categoria: produto.categoria ? produto.categoria.nome : null, // Substitui categoria_cod pelo nome
    }));
    res.json(produtosComNomeCategoria);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
