import ProductForm from '../components/ProductForm';
import { getProductById } from '../services';

async function ProductDetailView({ id }: { id: string }) {
  const product = await getProductById(id);

  return <ProductForm product={product} />;
}

export default ProductDetailView;
