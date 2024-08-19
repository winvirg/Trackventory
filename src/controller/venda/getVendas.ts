import { Request, Response } from 'express';
import { getVendas } from '../../service/venda/getVendas';

export async function getVendasController(req: Request, res: Response) {
  try {
    const vendas = await getVendas();
    res.status(200).json(vendas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter vendas' });
  }
}
