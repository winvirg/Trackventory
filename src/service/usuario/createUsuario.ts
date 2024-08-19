import { PrismaClient, usuario } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function createUsuario(nome: string, email: string, senha:string) {
  const saltRounds = 10; //faz as senhas hasheadas mesmo sendo identicas no hash não ficar igual
  const hashedSenha = await bcrypt.hash(senha, saltRounds);

  await  prisma.usuario.create({
    data: {
      id: uuidv4(),
      nome,
      email,
      senha: hashedSenha,
    }
  })
}
