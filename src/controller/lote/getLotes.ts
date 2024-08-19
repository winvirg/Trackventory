import { Request, Response } from 'express';
import { getLotes } from '../../service/lote/getLotes';

export async function getLotesController(req: Request, res: Response) {
  try {
    const lotes = await getLotes();
    res.status(200).json(lotes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao procurar lotes' });
  }
}
