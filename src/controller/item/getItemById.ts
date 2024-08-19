import { Request, Response } from 'express';
import { getItemById } from '../../service/item/getItemById';

export async function getItemByIdController(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const item = await getItemById(id);
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: 'Item não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar item' });
  }
}
