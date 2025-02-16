import ProductDetail from '@/modules/products/components/ProductDetail';
import { DATA } from '@/modules/products/mock/products';
import { FC } from 'react';

const page: FC<{ params: Promise<{ id: string }> }> = async ({ params }) => {
  console.log(params);
  const product = DATA[0];
  return <ProductDetail {...product} />;
};

export default page;
