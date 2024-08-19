import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getUsuarioById(id: string) {
  return await prisma.usuario.findUnique({
    where: { id },
  });
}
