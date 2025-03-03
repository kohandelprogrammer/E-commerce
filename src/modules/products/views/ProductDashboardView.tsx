import ProductTable from '../components/ProductsTable';
import { getProducts } from '../services';

async function ProductDashboardView() {
  const products = await getProducts();

  return <ProductTable products={products} />;
}

export default ProductDashboardView;
