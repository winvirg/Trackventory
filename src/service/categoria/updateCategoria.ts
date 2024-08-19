import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function updateCategoria(cod: string, nome: string) {
  await prisma.categoria.update({
    where: { cod },
    data: { nome },
  });
}
