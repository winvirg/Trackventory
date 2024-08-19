import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();
const tokenStoragePath = path.join(__dirname, 'tokenStorage.json');

export async function loginController(req: Request, res: Response) {
  const { email, senha } = req.body;

  try {
    // Verifica se o usuário existe
    const user = await prisma.usuario.findUnique({ where: { email } });

    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado' });
    }

    // Verifica se a senha está correta
    const isPasswordValid = await bcrypt.compare(senha, user.senha);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Senha incorreta' });
    }

    // Gera o token JWT com duração de 1 dia
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET as string,
      { expiresIn: '1d' }
    );

    // Salva o token em tokenStorage.json
    const tokens = JSON.parse(fs.readFileSync(tokenStoragePath, 'utf8'));
    tokens.push(token);
    fs.writeFileSync(tokenStoragePath, JSON.stringify(tokens));

    res.json({ token });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ error: 'Erro ao processar a solicitação' });
  }
}
