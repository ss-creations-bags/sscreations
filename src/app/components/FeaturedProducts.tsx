"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  title: string;
  image: string;
  printing: string;
  dimensions: string;
}

export default function FeaturedProducts() {
  const [products, setProducts] = useState<(Product & { categoryId: string })[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/assets.json')
      .then(response => response.json())
      .then(data => {
        // Get first 8 products from all categories
        const allProducts = data.categories
          .flatMap((cat: any) => 
            cat.products.slice(0, 2).map((product: Product) => ({ 
              ...product, 
              categoryId: cat.id 
            }))
          )
          .slice(0, 8);
        setProducts(allProducts);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading products:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="bg-custom-background">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-center text-primary/70">Loading products...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-custom-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif text-primary mb-2">
            Featured Collections
          </h2>
          <p className="text-sm sm:text-base text-primary/70 tracking-wide">
            Explore our finest creations, handpicked for discerning tastes
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-8 sm:mb-12">
          {products.map((product, index) => (
            <div
              key={`${product.categoryId}-${index}`}
              className="group relative block overflow-hidden rounded-sm border border-accent/40 bg-white hover:border-secondary-light transition-all"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-custom-background">
                <Image
                  src={`/${product.image}`}
                  alt={product.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
              </div>

              {/* Product Details */}
              <div className="p-3 sm:p-4">
                <h3 className="text-sm sm:text-base text-primary mb-3 line-clamp-2">
                  {product.title}
                </h3>

                <div className="space-y-1 mb-4">
                  <p className="text-xs text-primary/70 line-clamp-1">
                    <span className="tracking-widest uppercase font-medium">Printing:</span>{" "}
                    <span className="text-primary/90">{product.printing}</span>
                  </p>
                  <p className="text-xs text-primary/70 line-clamp-1">
                    <span className="tracking-widest uppercase font-medium">Dimensions:</span>{" "}
                    <span className="text-primary/90">{product.dimensions} cm</span>
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="block w-full rounded-sm bg-primary text-white px-3 sm:px-4 py-2 text-center text-xs sm:text-sm tracking-wide transition hover:bg-secondary"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/products"
            className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-primary text-white tracking-wide transition hover:bg-secondary rounded-sm text-sm sm:text-base"
          >
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  );
}
