import ProductListView from '@/modules/products/views/ProductListView';
import React from 'react';

const products = async () => {
  return (
    <div className="mt-20">
      <ProductListView />
    </div>
  );
};

export default products;
