import { PrismaClient, usuario } from '@prisma/client';

const prisma = new PrismaClient();

export async function getUsuarios(): Promise<usuario[]> {
  return await prisma.usuario.findMany();
}
