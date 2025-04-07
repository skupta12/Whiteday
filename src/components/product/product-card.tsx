import { Product } from "@/lib/shopify/types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { ProductCardItem } from "./product-card-item";
import {
  InfinitiveScrollerGroup,
} from "../ui/infinitive-scroller";

interface ProductCardProps {
  className?: string;
  products: Product[];
}

export const ProductCard: React.FC<ProductCardProps> = ({
  className,
  products,
}) => {
  return (
    <div className={cn("grid grid-cols-12 gap-6", className)}>
      {products.map((product) => (
        <div
          key={product.handle}
           className="lg:col-span-6 col-span-12 border relative overflow-hidden group" // animate-fade-in
        >
          <Link prefetch href={`/product/${product.handle}`}>
            <ProductCardItem
              width={600}
              height={900}
              alt={product.title}
              label={{
                title: product.title,
                amount: product.priceRange.maxVariantPrice.amount,
                currencyCode: product.priceRange.minVariantPrice.currencyCode,
              }}
              src={product.featuredImage?.url}
              className="w-full aspect-[2/3] object-cover"
            />

            {/* <p className="text-white">{product.description}</p> */}
          </Link>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <InfinitiveScrollerGroup title="Buy now" length={15} duration={5} />
          </div>
        </div>
      ))}
    </div>
  );
};
