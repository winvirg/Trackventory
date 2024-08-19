import { Request, Response } from 'express';
import { deleteVenda } from '../../service/venda/deleteVenda';

export async function deleteVendaController(req: Request, res: Response) {
  const { id } = req.params;
  
  try {
    await deleteVenda(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir venda' });
  }
}
