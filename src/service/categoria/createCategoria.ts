import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

export async function createCategoria(nome: string) {
  await prisma.categoria.create({
    data: {
      cod: uuidv4(),
      nome,
    },
  });
}


