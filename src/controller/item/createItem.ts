import { Request, Response } from 'express';
import { createItem } from '../../service/item/createItem';

export async function createItemController(req: Request, res: Response) {
  const { quantidade, valor_unitario, produto_cod_barras, venda_cod_venda } = req.body;

  try {
    await createItem(quantidade, valor_unitario, produto_cod_barras, venda_cod_venda);
    res.status(201).json({ message: 'Item criado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar item' });
  }
}
