"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { useEffect, useRef, useState } from "react";
import { createCartAndSetCookie, redirectToCheckout } from "./actions";
import { useFormStatus } from "react-dom";
import { createUrl } from "@/lib/utils";
import { DEFAULT_OPTION } from "@/lib/constants";
import { LoadingDots } from "../loading-dots";
import { useCart } from "./cart-context";
import { CalculatedCheckout, CartModalItem, CartNumber } from ".";

type MerchandiseSearchParams = {
  [key: string]: string;
};


export const CartModal: React.FC = () => {
  const { cart, updateCartItem } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const quantityRef = useRef(cart?.totalQuantity);

  useEffect(() => {
    if (!cart) {
      createCartAndSetCookie();
    }
  }, [cart]);

  useEffect(() => {
    if (cart) {
      const prevQuantity = quantityRef.current ?? 0;
      const currentQuantity = cart.totalQuantity ?? 0;

      const quantityIncreased = currentQuantity > prevQuantity;

      if (quantityIncreased && !isOpen) {
        setIsOpen(true);
      }

      quantityRef.current = currentQuantity;
    }
  }, [cart?.totalQuantity, isOpen]);

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <div className="relative">
          <SheetTrigger asChild>
            <div
              className="text-white mr-10 cursor-pointer font-medium 
              xl:text-[36px] sm:text-[30px] text-[20px] uppercase flex relative"
            >
              Cart
            </div>
          </SheetTrigger>
          <button className="absolute top-0 right-3" aria-label="Cart number">
            <CartNumber quantity={cart?.totalQuantity} />
          </button>
        </div>

        <SheetContent aria-describedby="The cart modal window" side="right">
          <SheetHeader className="border-b border-black">
            <SheetTitle className="sm:text-[32px] text-[28px] uppercase">
              Your cart
            </SheetTitle>
          </SheetHeader>

          {!cart || cart.lines.length === 0 ? (
            <div className="text-center h-full flex justify-center items-center text-2xl font-bold">
              Your cart is empty
            </div>
          ) : (
            <div className="flex h-full flex-col justify-between overflow-hidden">
              <ul className="grow overflow-auto pb-4 scrollbar">
                {cart.lines
                  .sort((a, b) =>
                    a.merchandise.product.title.localeCompare(
                      b.merchandise.product.title
                    )
                  )
                  .map((item, i) => {
                    const merchandiseSearchParams =
                      {} as MerchandiseSearchParams;

                    item.merchandise.selectedOptions.forEach(
                      ({ name, value }) => {
                        if (value !== DEFAULT_OPTION) {
                          merchandiseSearchParams[name.toLowerCase()] = value;
                        }
                      }
                    );

                    const merchandiseUrl = createUrl(
                      `/product/${item.merchandise.product.handle}`,
                      new URLSearchParams(merchandiseSearchParams)
                    );
                    return (
                      <li
                        key={i}
                        className="flex w-full flex-col border-b border-neutral-300"
                      >
                        <CartModalItem
                          item={item}
                          optimisticUpdate={updateCartItem}
                          productImageAlt={
                            item.merchandise.product.featuredImage.altText ||
                            item.merchandise.product.title
                          }
                          productImageUrl={
                            item.merchandise.product.featuredImage.url
                          }
                          productTitle={item.merchandise.product.title}
                          merchandiseUrl={merchandiseUrl}
                          merchandiseTitle={item.merchandise.title}
                          totalAmount={item.cost.totalAmount.amount}
                          currencyCode={item.cost.totalAmount.currencyCode}
                          quantity={item.quantity}
                          defaultOption={DEFAULT_OPTION}
                        />
                      </li>
                    );
                  })}
              </ul>
              <CalculatedCheckout
                totalTaxAmount={cart.cost.totalTaxAmount.amount}
                totalAmountCurrencyCode={cart.cost.totalAmount.currencyCode}
                totalAmount={cart.cost.totalAmount.amount}
                totalTaxAmountCurrencyCode={
                  cart.cost.totalTaxAmount.currencyCode
                }
              />

              <form className="p-4" action={redirectToCheckout}>
                {" "}
                {/* <form onSubmit={async (e) => { e.preventDefault(); await redirectToCheckout(); }}> */}
                <CheckoutButton />
              </form>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
};

const CheckoutButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className="font-inter block w-full h-12 uppercase text-black
      bg-white border border-black cursor-pointer  hover:bg-black hover:text-white transition-colors duration-500 text-center text-[18px] font-medium"
      type="submit"
      disabled={pending}
    >
      {pending ? <LoadingDots /> : "Proceed to Checkout"}
    </button>
  );
};
