"use client";

import { Product } from "@/lib/shopify/types";
import { Price, Prose, VariantSelector } from ".";
import styles from "@/styles";
import { useProduct } from "./product-context";
import { AddToCart } from "../cart";

export const ProductDescription = ({ product }: { product: Product }) => {
  
  const { state } = useProduct();

  const variants = product.variants.map((edge) => edge);

  const selectedVariant = variants.find((variant) =>
    variant.selectedOptions.every((option) => {
      const name = option.name.toLowerCase();
      return state[name] === option.value;
    })
  );

  const quantity = selectedVariant?.quantityAvailable ?? 0;

  return (
    <>
      <div className="flex flex-col border-b mb-5">
        <h1 className={`${styles.headingH1} mb-3 leading-[1]`}>
          {product.title}
        </h1>
        <div className="mr-auto w-auto text-[30px] text-white">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div>
      <VariantSelector options={product.options} variants={product.variants} />
      <div className="mb-6 flex gap-5 items-center">
        <AddToCart product={product}/>

        {quantity > 0 && quantity <= 6 && (
          <p className="text-sm text-white">
            This item only has{" "}
            <span className="text-red-400">{quantity} left</span> in stock!
          </p>
        )}
      </div>
      <div className="border border-white p-4 mb-6">
        <h4 className={styles.headingH4}>Info</h4>

        {product.descriptionHtml ? (
          <Prose html={product.descriptionHtml} />
        ) : null}
      </div>

      <div className="border border-white p-5">
        <h4 className={styles.headingH4}>Size Guide</h4>
        <p className={`${styles.paragraph} leading-[1.8]`}>
          Unexpected designs <br /> Made for everyone <br /> Great quality
        </p>
      </div>
      {/* <AddToCart product={product} /> */}
    </>
  );
};
