import { Request, Response } from 'express';
import { getVendedores } from '../../service/vendedor/getVendedores';

export async function getVendedoresController(req: Request, res: Response) {
  try {
    const vendedores = await getVendedores();
    res.status(200).json(vendedores);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar vendedores' });
  }
}
