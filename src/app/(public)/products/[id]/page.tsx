import ProductDetail from '@/modules/products/components/ProductDetail';
import { getProductById } from '@/modules/products/services';
import { FC } from 'react';

const page: FC<{ params: Promise<{ id: string }> }> = async ({ params }) => {
  const data = await params;
  const { id } = data;
  const product = await getProductById(id);

  return <ProductDetail {...product} />;
};

export default page;
