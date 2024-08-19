import { Request, Response } from 'express';
import { createCategoria } from '../../service/categoria/createCategoria';

export async function createCategoriaController(req: Request, res: Response) {
  const { nome } = req.body;

  if (!nome) {
    return res.status(400).json({ error: 'Nome é obrigatório' });
  }

  try {
    await createCategoria(nome);
    res.status(201).json({ message: 'Categoria criada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar categoria' });
  }
}
