import { Request, Response } from 'express';
import { updateLote } from '../../service/lote/updateLote';

export async function updateLoteController(req: Request, res: Response) {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatedLote = await updateLote(id, data);
    res.status(200).json(updatedLote);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar lote' });
  }
}
