import { Request, Response } from 'express';
import { updateItem } from '../../service/item/updateItem';

export async function updateItemController(req: Request, res: Response) {
  const { id } = req.params;
  const { quantidade, valor_unitario, produto_cod_barras, venda_cod_venda } = req.body;

  try {
    const updatedItem = await updateItem(id, quantidade, valor_unitario, produto_cod_barras, venda_cod_venda);
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar item' });
  }
}
