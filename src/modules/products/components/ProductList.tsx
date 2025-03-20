import ProductItem from './ProductItem';
import { ProductsWithImages } from '@/types';

function productList({ product }: { product: ProductsWithImages[] }) {
  return (
    <div className="flex flex-wrap justify-between items-center w-full my-10">
      {product.map((item) => {
        return <ProductItem key={item.name} product={item} />;
      })}
    </div>
  );
}

export default productList;
