import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt'

const prisma = new PrismaClient();

export async function updateUsuario(id: string, nome?: string, email?: string, senha?: string) {
  const data: any = {};

  if (nome) data.nome = nome;
  if (email) data.email = email;
  if (senha) {
    const saltRounds = 10;
    data.senha = await bcrypt.hash(senha, saltRounds);
  }

  return await prisma.usuario.update({
    where: { id },
    data,
  });
}
