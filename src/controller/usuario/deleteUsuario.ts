import { Request, Response } from 'express';
import { deleteUsuario } from '../../service/usuario/deleteUsuario';

export async function deleteUsuarioController(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const usuario = await deleteUsuario(id);

    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    return res.status(204).send(); // No content
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao deletar o usuário', error });
  }
}
