import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();
const tokenStoragePath = path.join(__dirname, '../../middleware/tokenStorage.json');

export async function loginController(req: Request, res: Response) {
  const { email, senha } = req.body;

  // Validações básicas
  if (!email || !senha) {
    return res.status(400).json({ error: 'Email e senha são obrigatórios' });
  }

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
      { expiresIn: '1m' }
    );

    // Salva o token em tokenStorage.json
    let tokens = [];
    if (fs.existsSync(tokenStoragePath)) {
      tokens = JSON.parse(fs.readFileSync(tokenStoragePath, 'utf8'));
    }
    tokens.push(token);
    fs.writeFileSync(tokenStoragePath, JSON.stringify(tokens));

    res.json({ token });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ error: 'Erro ao processar a solicitação' });
  }
}
