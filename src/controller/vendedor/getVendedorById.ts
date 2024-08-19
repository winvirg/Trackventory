import { Request, Response } from 'express';
import { getVendedorById } from '../../service/vendedor/getVendedorById';

export async function getVendedorByIdController(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const vendedor = await getVendedorById(id);
    if (vendedor) {
      res.status(200).json(vendedor);
    } else {
      res.status(404).json({ error: 'Vendedor não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar vendedor' });
  }
}
