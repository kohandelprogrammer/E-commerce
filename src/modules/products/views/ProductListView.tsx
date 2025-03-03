'use client';

import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import { getProductsApi } from '../services';
import { ProductsWithImages } from '@/types';

function ProductListView() {
  const [products, setProducts] = useState<ProductsWithImages[]>([]);

  const getData = async () => {
    const product: { data: ProductsWithImages[] } = await getProductsApi();
    setProducts(product?.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <ProductList product={products} />
    </div>
  );
}

export default ProductListView;
