import { Request, Response } from 'express';
import { updateProduto } from '../../service/produto/updateProduto';

export async function updateProdutoController(req: Request, res: Response) {
  const { cod_barras } = req.params;
  const { nome, preco_custo, preco_venda, quantidade, categoria_cod } = req.body;

  if (!nome || preco_custo === undefined || preco_venda === undefined || quantidade === undefined) {
    return res.status(400).json({ error: 'Nome, preco_custo, preco_venda e quantidade são obrigatórios' });
  }

  try {
    await updateProduto(cod_barras, nome, preco_custo, preco_venda, quantidade, categoria_cod);
    res.status(200).json({ message: 'Produto atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar produto' });
  }
}
