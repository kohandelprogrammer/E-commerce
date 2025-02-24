import { prisma } from '@/lib/prisma';

export const getProducts = async () => {
  const result = await prisma.product.findMany();

  return result;
};

export const getProductById = async (id: string) => {
  const result = await prisma.product.findUnique({ where: { id } });

  if (!result) {
    return null;
  }
  return result;
};
