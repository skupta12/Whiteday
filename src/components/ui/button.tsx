import { cn } from "@/lib/utils";
import styles from "@/styles";
import { cva } from "class-variance-authority";
import Link from "next/link";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  type: "button" | "submit";
  variant?: "default" | "revert";
  size?: string;
  disabled?: boolean;
  onClick?: () => void;
  availableForSale?: boolean;
  selectedVariantId?: string;
};

type ArrowButtonProps = {
  className?: string;
  children?: React.ReactNode;
  type?: "button" | "submit";
  size?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const buttonVariants = cva(`${styles.button}`, {
  variants: {
    variant: {
      default:
        "bg-white text-black hover:bg-black hover:text-white border border-black",
      revert:
        "bg-black text-white hover:bg-white hover:text-black border border-black",
    },
  },
});

const wrapperStyle = (bg: string = "white") =>
  `h-full border border-black bg-${bg} inline-block p-[3px]`;

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  href,
  type = "button",
  variant = "default",
  disabled = false,
  onClick,
  availableForSale,
  selectedVariantId,
}) => {
  const disabledClasses = "cursor-not-allowed opacity-60 hover:opacity-60";

// переносим проверку наличия и варианта вниз — только если нет href
if (!href && !availableForSale) {
  return (
    <div className={wrapperStyle("neutral-400")}>
      <button
        aria-label="Out of stock"
        disabled
        className={cn(buttonVariants({ variant }), disabledClasses)}
      >
        Out of Stock
      </button>
    </div>
  );
}

if (!href && !selectedVariantId) {
  return (
    <div className={wrapperStyle("neutral-400")}>
      <button
        aria-label="Please select an option"
        disabled
        className={cn(buttonVariants({ variant }), disabledClasses)}
      >
        Add to Cart
      </button>
    </div>
  );
}


  // Default button
  return (
    <div className={wrapperStyle()}>
      <button
        onClick={onClick}
        disabled={disabled}
        type={type}
        className={cn(buttonVariants({ variant }), className)}
      >
        {children}
      </button>
    </div>
  );
};

const ArrowButton: React.FC<ArrowButtonProps> = ({
  children,
  type = "button",
  onClick,
  className,
  disabled = false,
}) => {
  return (
    <button
      className={cn(className)}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export { Button, buttonVariants, ArrowButton };
