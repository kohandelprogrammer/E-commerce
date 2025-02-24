import React from 'react';
import ProductList from '../components/ProductList';
import { getProducts } from '../services';

async function ProductListView() {
  const product = await getProducts();
  return (
    <div>
      <ProductList product={product} />
    </div>
  );
}

export default ProductListView;
