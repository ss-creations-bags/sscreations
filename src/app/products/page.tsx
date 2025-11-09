import { promises as fs } from 'fs';
import { Suspense } from 'react';
import ProductFilter from '../components/ProductFilter';
import Footer2 from '../components/Footer2';

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

// Loading component for Suspense fallback
function ProductsLoading() {
  return (
    <main className="bg-custom-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Filter buttons loading skeleton */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-primary cormorant-500 tracking-[-0.03em] mb-4">Filter by Category</h2>
          <div className="flex flex-wrap gap-2">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="h-9 w-32 bg-gray-200 rounded-sm animate-pulse"
              />
            ))}
          </div>
        </div>
        
        {/* Products grid loading skeleton */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-sm border border-accent/40 p-4 animate-pulse"
            >
              <div className="h-56 bg-gray-200 rounded-sm mb-4" />
              <div className="h-4 bg-gray-200 rounded-sm mb-2 w-3/4" />
              <div className="h-3 bg-gray-200 rounded-sm mb-1 w-1/2" />
              <div className="h-3 bg-gray-200 rounded-sm mb-4 w-2/3" />
              <div className="h-9 bg-gray-200 rounded-sm" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default async function ProductsPage() {
  const file = await fs.readFile(process.cwd() + '/public/assets.json', 'utf8');
  const data: ProductData = JSON.parse(file);

  return (
    <Suspense fallback={<ProductsLoading />}>
      <ProductFilter categories={data.categories} />
      <Footer2 />
    </Suspense>
  );
}