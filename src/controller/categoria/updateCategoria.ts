import { Request, Response } from 'express';
import { updateCategoria } from '../../service/categoria/updateCategoria';

export async function updateCategoriaController(req: Request, res: Response) {
  const { cod } = req.params;
  const { nome } = req.body;

  if (!nome) {
    return res.status(400).json({ error: 'Nome é obrigatório' });
  }

  try {
    await updateCategoria(cod, nome);
    res.status(200).json({ message: 'Categoria atualizada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar categoria' });
  }
}
