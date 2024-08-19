import { Request, Response } from 'express';
import { createVenda } from '../../service/venda/createVenda';

export async function createVendaController(req: Request, res: Response) {
  const { valor, entrega, endereco, vendedor_id } = req.body;

  try {
    const venda = await createVenda(valor, entrega, endereco, vendedor_id);
    res.status(201).json({ message: 'Venda criada com sucesso', venda });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar venda' });
  }
}
