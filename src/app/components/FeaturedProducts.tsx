"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button"; // Adjust path as needed

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

export default function FeaturedProducts() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/assets.json")
      .then((res) => res.json())
      .then((data: { categories: Category[] }) => {
        setCategories(data.categories.slice(0, 4)); // only top 4
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading categories:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="bg-custom-background">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-center text-primary/70">Loading collections...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-custom-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header row — left title, right button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary cormorant-500 tracking-[-0.03em] mb-1 sm:mb-0">
              Featured Collections
            </h2>
            <p className="text-sm sm:text-base text-primary/70 tracking-wide">
              Explore our signature bag categories
            </p>
          </div>

          <Button 
            text="View All Collections" 
            href="/products" 
            className="mt-4 sm:mt-0"
          />
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const product = category.products[0];
            if (!product) return null;

            return (
              <div
                key={category.id}
                className="group relative overflow-hidden border border-accent/30 bg-white hover:border-secondary-light transition-all"
              >
                <Link href={`/categories/${category.id}`}>
                  <div className="relative h-48 sm:h-60 w-full overflow-hidden bg-custom-background">
                    <Image
                      src={`/${product.image}`}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 25vw, 25vw"
                    />
                  </div>

                  <div className="p-1 text-left font-bold">
                    <h3 className="text-base sm:text-lg font-medium text-primary">
                      {category.name}
                    </h3>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}