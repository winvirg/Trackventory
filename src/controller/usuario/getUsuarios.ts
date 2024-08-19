import { Request, Response } from 'express';
import { getUsuarios } from '../../service/usuario/getUsuarios';

export async function getUsuariosController(req: Request, res: Response): Promise<void> {
  try {
    const usuarios = await getUsuarios();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
}
