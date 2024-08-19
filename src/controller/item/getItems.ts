import { Request, Response } from 'express';
import { getItems } from '../../service/item/getItems';

export async function getItemsController(req: Request, res: Response) {
  try {
    const items = await getItems();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar itens' });
  }
}
