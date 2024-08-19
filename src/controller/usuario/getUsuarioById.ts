import { Request, Response } from 'express';
import { getUsuarioById } from '../../service/usuario/getUsuarioById';

export async function getUsuarioByIdController(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const usuario = await getUsuarioById(id);
    
    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    return res.json(usuario);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar o usuário', error });
  }
}
