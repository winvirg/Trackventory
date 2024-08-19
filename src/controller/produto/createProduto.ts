import { Request, Response } from 'express';
import { createProduto } from '../../service/produto/createProduto';

export async function createProdutoController(req: Request, res: Response) {
  const { cod_barras, nome, preco_custo, preco_venda, quantidade, categoria_cod } = req.body;

  try {
    await createProduto(cod_barras, nome, preco_custo, preco_venda, quantidade, categoria_cod);
    res.status(201).json({ message: 'Produto criado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar produto' });
  }
}
