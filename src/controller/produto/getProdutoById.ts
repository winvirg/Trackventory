import { Request, Response } from 'express';
import { getProdutoById } from '../../service/produto/getProdutoById';

export async function getProdutoByIdController(req: Request, res: Response) {
  const { cod_barras } = req.params;
  try {
    const produto = await getProdutoById(cod_barras);
    if (produto) {
      res.json({
        cod_barras: produto.cod_barras,
        nome: produto.nome,
        preco_custo: produto.preco_custo,
        preco_venda: produto.preco_venda,
        quantidade: produto.quantidade,
        categoria: produto.categoria ? produto.categoria.nome : null, // Substitui categoria_cod pelo nome
      });
    } else {
      res.status(404).json({ message: 'Produto não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
