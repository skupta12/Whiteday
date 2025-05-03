"use client";

import { CartItem } from "@/lib/shopify/types";
import { updateItemQuantity } from "./actions";
import { MinusIcon, PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useActionState, useTransition } from "react";

function SubmitButton({
  type,
  disabled,
}: {
  type: "plus" | "minus";
  disabled?: boolean;
}) {
  return (
    <button
      type="submit"
      disabled={disabled}
      aria-label={
        type === "plus" ? "Increase item quantity" : "Reduce item quantity"
      }
      className={cn(
        "ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full p-2 transition-all duration-200",
        {
          "ml-auto": type === "minus",
          "opacity-40": disabled,
        }
      )}
    >
      {type === "plus" ? (
        <PlusIcon className="h-4 w-4" />
      ) : (
        <MinusIcon className="h-4 w-4" />
      )}
    </button>
  );
}

export const EditItemQuantityButton = ({
  item,
  type,
  optimisticUpdate,
}: {
  item: CartItem;
  type: "plus" | "minus";
  optimisticUpdate: any;
}) => {
  const [message, formAction] = useActionState(updateItemQuantity, null);
  const [isPending, startTransition] = useTransition();

  const isPlus = type === "plus";
  const payload = {
    merchandiseId: item.merchandise.id,
    quantity: isPlus ? item.quantity + 1 : item.quantity - 1,
  };

  const actionWithVariant = formAction.bind(null, payload);

  return (
    <form
      action={() => {
          startTransition(() => {
            optimisticUpdate(payload.merchandiseId, type);
            actionWithVariant();
          });
      }}
    >
      <SubmitButton type={type} disabled={isPending} />
      <p aria-label="polite" className="sr-only g" role="status">
        {message}
      </p>
    </form>
  );
};
