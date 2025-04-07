"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { useState } from "react";

// type MerchandiseSearchParams = {
//   [key: string]: string;
// };

export const CartModal: React.FC = () => {
  //   const { cart, updateCartItem } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  //   const quantityRef = useRef(cart?.totalQuantity);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  //   useEffect(() => {
  //     if (!cart) {
  //       createCartAndSetCookie();
  //     }
  //   }, [cart]);

  //   useEffect(() => {
  //     if (
  //       cart?.totalQuantity &&
  //       cart?.totalQuantity !== quantityRef.current &&
  //       cart?.totalQuantity > 0
  //     ) {
  //       if (!isOpen) {
  //         setIsOpen(true);
  //       }
  //       quantityRef.current = cart?.totalQuantity;
  //     }
  //   }, [isOpen, cart?.totalQuantity, quantityRef]);

  return (
    <>
      <Sheet open={isOpen} onOpenChange={isOpen ? closeCart : openCart}>
        <div className="relative">
          <SheetTrigger asChild>
            <div
              className="text-white mr-10 cursor-pointer font-medium 
              xl:text-[36px] xs:text-[30px] text-[24px] uppercase flex relative"
            >
              Cart
            </div>
          </SheetTrigger>
          <button className="absolute top-0 right-3" aria-label="Cart number">
            {/* <CartNumber quantity={cart?.totalQuantity} /> */}
            <div
              className="flex flex-col justify-center items-center 
            rounded-full h-6 w-6 bg-white p-1 text-[13px] font-medium text-black"
            >
              0
            </div>
          </button>
        </div>

        <SheetContent aria-describedby="The cart modal window" side="right">
          <SheetHeader className="border-b border-black">
            <SheetTitle className="sm:text-[32px] text-[28px] uppercase">
              Your cart
            </SheetTitle>
          </SheetHeader>

          <div className="text-center h-full flex justify-center 
          items-center text-2xl font-bold">
            Your cart is empty
          </div>

          {/* <CalculatedCheckout
                totalTaxAmount={cart.cost.totalTaxAmount.amount}
                totalAmountCurrencyCode={cart.cost.totalAmount.currencyCode}
                totalAmount={cart.cost.totalAmount.amount}
                totalTaxAmountCurrencyCode={cart.cost.totalTaxAmount.currencyCode}
              /> */}

          {/* <form action={redirectToCheckout}> 
                <CheckoutButton />
              </form>
            </div>
          )}

          {/* any content below */}
        </SheetContent>
      </Sheet>
    </>
  );
};

// const CheckoutButton = () => {

//   const { pending } = useFormStatus();

//   return (
//     <button
//       className="block w-full rounded-full bg-blue-600 p-3 text-center text-sm font-medium text-white opacity-90 hover:opacity-100"
//       type="submit"
//       disabled={pending}
//     >
//       {pending ? <LoadingDots className="bg-white" /> : "Proceed to Checkout"}
//     </button>
//   );
// };
