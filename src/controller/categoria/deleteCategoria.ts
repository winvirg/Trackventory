import { Request, Response } from 'express';
import { deleteCategoria } from '../../service/categoria/deleteCategoria';

export async function deleteCategoriaController(req: Request, res: Response) {
  const { cod } = req.params;

  try {
    await deleteCategoria(cod);
    res.status(200).json({ message: 'Categoria deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar categoria' });
  }
}
