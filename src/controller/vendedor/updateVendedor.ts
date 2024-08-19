import { Request, Response } from 'express';
import { updateVendedor } from '../../service/vendedor/updateVendedor';

export async function updateVendedorController(req: Request, res: Response) {
  const { id } = req.params;
  const { nome } = req.body;

  try {
    const vendedor = await updateVendedor(id, nome);
    res.status(200).json(vendedor);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar vendedor' });
  }
}
