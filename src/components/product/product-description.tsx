"use client";

import { Product } from "@/lib/shopify/types";
import { Price, Prose, VariantSelector } from ".";
import styles from "@/styles";
import { Button } from "../ui";
import { useProduct } from "./product-context";

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
      <div className="flex flex-col border-b pb-6">
        <h1 className={`${styles.headingH1} mb-3 leading-[1]`}>
          {product.title}
        </h1>
        <div className="mr-auto w-auto text-[30px] text-white mb-4">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
        {product.descriptionHtml ? (
          <Prose html={product.descriptionHtml} />
        ) : null}
      </div>
      <VariantSelector options={product.options} variants={product.variants} />
        <div className="my-8">
        <Button variant="default" type="button">Add to cart</Button>
        </div>

        <div className="h-8">
        {quantity > 0 && quantity <= 6 && (
          <p className=" text-md text-red-500">
            This item only has {quantity} left in stock!
          </p>
        )}
        </div>
     

      <div className="border border-white p-5 mb-8">
        <h4 className={styles.headingH4}>Info</h4>
        <p className={`${styles.paragraph} leading-[1.8]`}>
          {product.metafield?.value}
        </p>
      </div>
   
      {/* <div className="border border-white p-5">
        <h4 className={styles.headingH4}>Size Guide</h4>
        <p className={`${styles.paragraph} leading-[1.8]`}>
          Unexpected designs <br/> Made for everyone
        </p>
      </div> */}
      {/* <AddToCart product={product} /> */}
      
    </>
  );
};
