import { Product } from "@/lib/shopify/types";
import { Price, Prose, VariantSelector } from ".";

export const ProductDescription = ({ product }: { product: Product }) => {
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6">
        <h1 className="mb-2 text-5xl font-medium text-white">{product.title}</h1>
        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div>
  
      <VariantSelector options={product.options} variants={product.variants} />
 
    
      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight text-white"
          html={product.descriptionHtml}
        />
      ) : null}
      {/* <AddToCart product={product} /> */}
    </>
  );
}