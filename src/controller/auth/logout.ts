import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const tokenStoragePath = path.join(__dirname, '../../middleware/tokenStorage.json'); //para guardar token invalido

export function logoutController(req: Request, res: Response) {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(400).json({ error: 'Token não fornecido' });

    const tokens = JSON.parse(fs.readFileSync(tokenStoragePath, 'utf8'));

    // Remover o token da lista
    const updatedTokens = tokens.filter((storedToken: string) => storedToken !== token);
    fs.writeFileSync(tokenStoragePath, JSON.stringify(updatedTokens));

    return res.json({ message: 'Logout realizado com sucesso' });
}
