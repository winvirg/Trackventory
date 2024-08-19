import { Request, Response } from 'express';
import { updateUsuario } from '../../service/usuario/updateUsuario';

export async function updateUsuarioController(req: Request, res: Response) {
  const { id } = req.params;
  const { nome, email, senha } = req.body;

  try {
    const usuario = await updateUsuario(id, nome, email, senha);

    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    return res.json(usuario);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao atualizar o usuário', error });
  }
}
