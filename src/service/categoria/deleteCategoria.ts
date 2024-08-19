import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function deleteCategoria(cod: string) {
  await prisma.categoria.delete({
    where: { cod },
  });
}
