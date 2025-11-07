import { promises as fs } from 'fs';
import ProductFilter from '../components/ProductFilter';

interface Product {
  title: string;
  image: string;
  printing: string;
  dimensions: string;
}

interface Category {
  id: string;
  name: string;
  products: Product[];
}

interface ProductData {
  categories: Category[];
}

export default async function ProductsPage() {
  const file = await fs.readFile(process.cwd() + '/public/assets.json', 'utf8');
  const data: ProductData = JSON.parse(file);

  return (
    <>
      <ProductFilter categories={data.categories} />
    </>
  );
}
