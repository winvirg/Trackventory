import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export async function createUsuario(dados: Prisma.usuarioCreateInput) {
  return prisma.usuario.create({
    data: dados,
  });
}
