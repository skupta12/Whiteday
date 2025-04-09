"use client";

import { Product, ProductVariant } from "@/lib/shopify/types";
import { useProduct } from "../product/product-context";
import { useActionState, useState } from "react";
import { useCart } from "./cart-context";
import { addItem } from "./actions";
import { Button } from "../ui";

interface AddToCartProps {
  product: Product;
}

export const AddToCart = ({ product }: AddToCartProps) => {

  const { variants, availableForSale } = product;
  const { addCartItem } = useCart();
  const { state } = useProduct();

  const [message, formAction] = useActionState(addItem, null);
  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every(
      (option) => option.value === state[option.name.toLowerCase()]
    )
  );

  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const selectedVariantId = variant?.id || defaultVariantId;
  const actionWithVariant = formAction.bind(null, selectedVariantId);
  const finalVariant = variants.find(
    (variant) => variant.id === selectedVariantId
  )!;

  const [loading, setLoading] = useState(false);

  const handleLoading = () => { // temp
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500)
  }

  return (
    <form
      action={async () => {
        addCartItem(finalVariant, product);
        await actionWithVariant();
      }}
    >
      <Button
        type="submit"
        variant="default"
        onClick={handleLoading}
        availableForSale={availableForSale}
        selectedVariantId={selectedVariantId}
      >
         {loading ? "Adding to cart..." : "Add to Cart"}
      </Button>
      <p className="sr-only" role="status" aria-label="polite">
        {message}
      </p>
    </form>
  );
};
