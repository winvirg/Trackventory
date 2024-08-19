import { Request, Response } from 'express';
import { getLoteById } from '../../service/lote/getLoteById';

export async function getLoteByIdController(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const lote = await getLoteById(id);
    if (lote) {
      res.status(200).json(lote);
    } else {
      res.status(404).json({ error: 'Lote não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao procurar lote, verifique o id' });
  }
}
