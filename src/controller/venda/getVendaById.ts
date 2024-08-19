import { Request, Response } from 'express';
import { getVendaById } from '../../service/venda/getVendaById';

export async function getVendaByIdController(req: Request, res: Response) {
  const { id } = req.params;
  
  try {
    const venda = await getVendaById(id);
    
    if (!venda) {
      return res.status(404).json({ message: 'Venda não encontrada' });
    }
    
    res.status(200).json(venda);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter venda' });
  }
}
