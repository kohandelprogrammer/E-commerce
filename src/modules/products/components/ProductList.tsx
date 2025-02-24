import React from 'react';
import ProductItem from './ProductItem';
import { PrismaType } from '@/lib/prisma';

function productList({ product }: { product: PrismaType.Product[] }) {
  return (
    <div className="flex flex-wrap justify-between items-center w-full my-10">
      {product.map((item) => {
        return <ProductItem key={item.name} product={item} />;
      })}
    </div>
  );
}

export default productList;
