import Image from "next/image";
import Link from "next/link";
import { CartItem } from "@/lib/shopify/types";
import { Price } from "../product";
import { EditItemQuantityButton } from ".";

interface CartModalItemProps {
  className?: string;
  item: CartItem;
  optimisticUpdate: any;
  productImageAlt: string;
  productTitle: string;
  productImageUrl: string;
  merchandiseUrl: string;
  merchandiseTitle: string;
  totalAmount: string;
  currencyCode: string;
  quantity: number;
  defaultOption: string;
}

export const CartModalItem: React.FC<CartModalItemProps> = ({
  item,
  optimisticUpdate,
  productImageAlt,
  productTitle,
  productImageUrl,
  merchandiseUrl,
  merchandiseTitle,
  totalAmount,
  currencyCode,
  quantity,
  defaultOption,
}) => {
  return (
    <div className="flex flex-row justify-between items-center py-4 px-4">
      {/* <div className="absolute z-40 -ml-1 -mt-2">
        <DeleteItemButton item={item} optimisticUpdate={optimisticUpdate} />
      </div> */}
      <div className="flex gap-x-2 item">
        <div className="relative h-20 w-16 overflow-hidden border border-neutral-300 bg-neutral-300">
          <Image
            className="h-full w-full object-cover"
            width={64}
            height={64}
            alt={productImageAlt || productTitle}
            src={productImageUrl}
          />
        </div>
        <Link
          href={merchandiseUrl}
          className="z-30 ml-2 flex space-x-4"
        >
          <div className="flex flex-1 flex-col text-[18px] gap-y-1">

            <span className="leading-tight font-semibold text-[19px] font-inter">{productTitle}</span>
            
            <Price className="text-base text-neutral-700" amount={totalAmount} currencyCode={currencyCode} />
            {merchandiseTitle !== defaultOption ? (
              <p className="text-base text-neutral-700">Size: {merchandiseTitle}</p>
            ) : null}
          </div>
        </Link>
      </div>
      <div className="flex h-16 flex-col justify-between">
        <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200">
          <EditItemQuantityButton
            item={item}
            type="minus"
            optimisticUpdate={optimisticUpdate}
          />
          <p className="w-6 text-center">
            <span className="w-full text-sm">{quantity}</span>
          </p>
          <EditItemQuantityButton
            item={item}
            type="plus"
            optimisticUpdate={optimisticUpdate}
          />
        </div>
      </div>
    </div>
  );
};
