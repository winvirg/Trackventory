import { Request, Response } from 'express';
import { updateVenda } from '../../service/venda/updateVenda';

export async function updateVendaController(req: Request, res: Response) {
  const { id } = req.params;
  const { valor, entrega, endereco, vendedor_id } = req.body;
  
  try {
    const venda = await updateVenda(id, valor, entrega, endereco, vendedor_id);
    res.status(200).json(venda);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar venda' });
  }
}
