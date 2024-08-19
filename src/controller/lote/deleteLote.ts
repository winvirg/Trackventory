import { Request, Response } from 'express';
import { deleteLote } from '../../service/lote/deleteLote';

export async function deleteLoteController(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await deleteLote(id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir lote' });
  }
}
