import { Request, Response } from 'express';
import { createLote } from '../../service/lote/createLote';

export async function createLoteController(req: Request, res: Response) {
  try {
    const { validade, localizacao, produto_cod_barras } = req.body;
    await createLote(validade, localizacao, produto_cod_barras);
    res.status(201).json({ message: 'Lote criado com sucesso' });
  } catch (error) {
    console.error('Erro ao criar lote:', error);
    res.status(500).json({ error: 'Erro ao criar lote' });
  }
}
