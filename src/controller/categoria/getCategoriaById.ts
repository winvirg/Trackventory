import { Request, Response } from 'express';
import { getCategoriaById } from '../../service/categoria/getCategoriaById';

export async function getCategoriaByIdController(req: Request, res: Response) {
  const { cod } = req.params;

  try {
    const categoria = await getCategoriaById(cod);
    if (categoria) {
      res.status(200).json(categoria);
    } else {
      res.status(404).json({ error: 'Categoria não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar categoria' });
  }
}
