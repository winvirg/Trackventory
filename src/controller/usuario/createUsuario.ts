import { Request, Response } from 'express';
import { createUsuario } from '../../service/usuario/createUsuario';

export async function createUsuarioController (req: Request, res: Response){
    const { nome, email, senha } = req.body;

    try{
        await createUsuario(nome, email, senha);
        return res.status(201).json({ message: 'Usuario criado com sucesso!'});
    } catch (error) {
        console.error('Erro ao criar usuario: ', error);
        return res.status(500).json({ error: 'Erro ao criar usuario. Por favor, tente novamente mais tarde.' });
    }
}