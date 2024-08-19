import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function deleteUsuario(id: string) {
  return await prisma.usuario.delete({
    where: { id },
  });
}
