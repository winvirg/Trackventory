import { Request, Response } from 'express';
import { deleteVendedor } from '../../service/vendedor/deleteVendedor';

export async function deleteVendedorController(req: Request, res: Response) {
  const { id } = req.params;

  try {
    await deleteVendedor(id);
    res.status(204).send(); // No content
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar vendedor' });
  }
}
