"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Button2 from "./Button2";

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

interface ProductFilterProps {
  categories: Category[];
}

export default function ProductFilter({ categories }: ProductFilterProps) {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Read category from URL query parameter on component mount
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  const filterButtons = [
    { id: "all", label: "All Products" },
    { id: "nonwovencommonbags", label: "Non-Woven Bags" },
    { id: "bopplaminatedppwovenfabricboxbag", label: "BOPP Laminated" },
    { id: "nonwovenstitchedbags", label: "Non-Woven Stitched Bags" },
    { id: "boppbag", label: "BOPP Bags" },
    { id: "zippouch", label: "Zip Pouches" },
    { id: "ziplockbags", label: "Zip Lock Bags" },
    { id: "jutebags", label: "Jute Bags" },
  ];

  const filteredCategories = selectedCategory === "all" 
    ? categories 
    : categories.filter(cat => cat.id === selectedCategory);

  return (
    <main className="bg-custom-background">
      {/* Filter Section */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary cormorant-500 tracking-[-0.03em] mb-4">Filter by Category</h2>
          <div className="flex flex-wrap gap-2">
            {filterButtons.map((button) => (
              <button
                key={button.id}
                onClick={() => setSelectedCategory(button.id)}
                className={`border px-8 py-3 text-base font-medium transition tracking-[-0.03em] ${
                  selectedCategory === button.id
                    ? "text-white bg-primary hover:bg-secondary hover:text-custom-background"
                    : "text-primary bg-custom-background border-primary/30 hover:bg-primary hover:text-white"
                }`}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredCategories.map((category) => (
          <div key={category.id} className="mb-12">
            <h2 className="text-3xl font-bold text-primary cormorant-500 tracking-[-0.03em] mb-6">
              {category.name}
            </h2>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {category.products.map((product, index) => (
                <div
                  key={`${category.id}-${index}`}
                  className="group relative block overflow-hidden rounded-sm border border-accent/100 bg-white hover:border-secondary-light transition-all"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-custom-background sm:h-64">
                    <Image
                      src={`/${product.image}`}
                      alt={product.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-base text-primary mb-3">
                      {product.title}
                    </h3>

                    <div className="space-y-1 mb-4">
                      <p className="text-xs text-primary/70">
                        <span className="tracking-widest uppercase">Printing:</span>{" "}
                        <span className="text-primary/90">{product.printing}</span>
                      </p>
                      <p className="text-xs text-primary/70">
                        <span className="tracking-widest uppercase">Dimensions:</span>{" "}
                        <span className="text-primary/90">{product.dimensions} cm</span>
                      </p>
                    </div>
                    
                    <div className="flex justify-center mt-8">
                      <Button2 text="Inquire Now" href="/contact" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
