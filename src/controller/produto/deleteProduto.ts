import { Request, Response } from 'express';
import { deleteProduto } from '../../service/produto/deleteProduto';

export async function deleteProdutoController(req: Request, res: Response) {
  const { cod_barras } = req.params;

  try {
    await deleteProduto(cod_barras);
    res.status(200).json({ message: 'Produto deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar produto' });
  }
}
