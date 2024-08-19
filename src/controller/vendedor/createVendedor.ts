import { Request, Response } from 'express';
import { createVendedor } from '../../service/vendedor/createVendedor';

export async function createVendedorController(req: Request, res: Response) {
  const { nome } = req.body;

  try {
    await createVendedor(nome);
    res.status(201).json({ message: 'Vendedor criado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar vendedor' });
  }
}
