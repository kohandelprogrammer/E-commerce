import ProductListView from '@/modules/products/views/ProductListView';
import React from 'react';
import { prisma, PrismaType } from '@/lib/prisma';

const products = async () => {
  const data: PrismaType.Product[] = await prisma.product.findMany();

  console.log(data);
  return (
    <div className="mt-20">
      <ProductListView />
    </div>
  );
};

export default products;
