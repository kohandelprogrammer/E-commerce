import ProductDetailView from '@/modules/products/views/ProductDetailView';

async function page({ params }: { params: Promise<{ id: string }> }) {
  const data = await params;
  const { id } = data;

  return <ProductDetailView id={id} />;
}

export default page;
