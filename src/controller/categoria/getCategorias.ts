import { Request, Response } from 'express';
import { getCategorias } from '../../service/categoria/getCategorias';

export async function getCategoriasController(req: Request, res: Response) {
  try {
    const categorias = await getCategorias();
    res.status(200).json(categorias);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar categorias' });
  }
}
