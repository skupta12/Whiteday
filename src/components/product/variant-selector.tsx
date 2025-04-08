'use client';

import { ProductOption, ProductVariant } from "@/lib/shopify/types";
import { useProduct, useUpdateURL } from "./product-context";
import { cn } from "@/lib/utils";

type Combination = {
  id: string;
  availableForSale: boolean;
  [key: string]: string | boolean;
};

export function VariantSelector({
  options,
  variants
}: {
  options: ProductOption[];
  variants: ProductVariant[];
}) {
  const { state, updateOption } = useProduct();
  const updateURL = useUpdateURL();
  const hasNoOptionsOrJustOneOption =
    !options.length || (options.length === 1 && options[0]?.values.length === 1);

  if (hasNoOptionsOrJustOneOption) {
    return null;
  }

  const combinations: Combination[] = variants.map((variant) => ({
    id: variant.id,
    availableForSale: variant.availableForSale,
    ...variant.selectedOptions.reduce(
      (accumulator, option) => ({ ...accumulator, [option.name.toLowerCase()]: option.value }),
      {}
    )
  }));

  return options.map((option) => (
    <form key={option.id}>
      <dl>
        <dt className="mb-4 text-sm uppercase tracking-wide text-white">{option.name}</dt>
        <dd className="flex flex-wrap gap-3 mb-6">
          {option.values.map((value) => {
            const optionNameLowerCase = option.name.toLowerCase();

            // Base option params on current selectedOptions so we can preserve any other param state.
            const optionParams = { ...state, [optionNameLowerCase]: value };

            // Filter out invalid options and check if the option combination is available for sale.
            const filtered = Object.entries(optionParams).filter(([key, value]) =>
              options.find(
                (option) => option.name.toLowerCase() === key && option.values.includes(value)
              )
            );
            const isAvailableForSale = combinations.find((combination) =>
              filtered.every(
                ([key, value]) => combination[key] === value && combination.availableForSale
              )
            );

            // The option is active if it's in the selected options.
            const isActive = state[optionNameLowerCase] === value;

            return (
              <button
                formAction={() => {
                  const newState = updateOption(optionNameLowerCase, value);
                  updateURL(newState);
                }}
                key={value}
                aria-disabled={!isAvailableForSale}
                disabled={!isAvailableForSale}
                title={`${option.name} ${value}${!isAvailableForSale ? ' (Out of Stock)' : ''}`}
                className={cn(
                  'flex min-w-[48px] items-center justify-center border text-white bg-black px-4 py-1 text-lg',
                  {
                    'cursor-default border-blue-500': isActive,
                    'ring-1 ring-transparent transition duration-300 ease-in-out':
                      !isActive && isAvailableForSale,
                    'relative z-10  cursor-not-allowed overflow-hidden bg-black/50 text-white/50 before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-neutral-300 before:transition-transform':
                      !isAvailableForSale
                  }
                )}
              >
                {value}
              </button>
            );
          })}
        </dd>
      </dl>
    </form>
  ));
}