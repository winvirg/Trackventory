import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { User } from '../../types/user';
import fs from 'fs';
import path from 'path';

const tokenStoragePath = path.join(__dirname, 'tokenStorage.json');

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token não fornecido' });

  const tokens = JSON.parse(fs.readFileSync(tokenStoragePath, 'utf8'));

  // Verifique se o token é válido
  if (!tokens.includes(token)) {
    return res.status(403).json({ error: 'Token inválido' });
}

  jwt.verify(token, process.env.JWT_SECRET as string, (err: any, decoded: any) => {
    if (err) return res.status(403).json({ error: 'Token inválido' });

    req.user = decoded as User;
    next();
  });
}
