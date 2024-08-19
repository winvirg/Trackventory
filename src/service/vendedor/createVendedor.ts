import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

export async function createVendedor(nome: string) {
  await prisma.vendedor.create({
    data: {
      id: uuidv4(),
      nome,
    },
  });
}
