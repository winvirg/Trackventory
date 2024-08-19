import { Request, Response } from 'express';
import { deleteItem } from '../../service/item/deleteItem';

export async function deleteItemController(req: Request, res: Response) {
  const { id } = req.params;

  try {
    await deleteItem(id);
    res.json({ message: 'Item excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir item' });
  }
}
