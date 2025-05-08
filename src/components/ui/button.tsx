import { cn } from "@/lib/utils";
import styles from "@/styles";
import { cva } from "class-variance-authority";
import Link from "next/link";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  href: string;
  type: "button" | "submit" | undefined;
  variant?: "default" | "revert";
  disabled?: boolean;
};
type AddToCartButtonProps = {
  children: React.ReactNode;
  className?: string;
  type: "button" | "submit" | undefined;
  variant?: "default" | "revert";
  disabled?: boolean;
  onClick?: () => void;
  availableForSale?: boolean;
  selectedVariantId?: string | undefined;
};

type ArrowButtonProps = {
  className: string;
  children?: React.ReactNode;
  type?: "button" | "submit" | undefined;
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

const wrapperClasses =
  "h-full border border-black bg-white inline-block p-[3px]";

const Button: React.FC<ButtonProps> = ({
  className,
  type,
  variant = "default",
  children,
  href,
}) => {
  return (
    <Link href={href} className={cn(wrapperClasses)}>
      <button
        type={type}
        className={cn(buttonVariants({ variant }), className)}
      >
        {children}
      </button>
    </Link>
  );
};

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  children,
  className,
  type = "button",
  variant = "default",
  disabled = false,
  onClick,
  availableForSale = true,
  selectedVariantId,
}) => {
  const isOutOfStock = !availableForSale;
  const isVariantUnselected = !selectedVariantId;

  const renderButton = (
    content: React.ReactNode,
    buttonDisabled: boolean,
    ariaLabel?: string
  ) => (
    <div className={cn(wrapperClasses, buttonDisabled && "cursor-not-allowed")}>
      <button
        onClick={onClick}
        disabled={buttonDisabled}
        type={type}
        aria-label={ariaLabel}
        className={cn(buttonVariants({ variant }), className)}
      >
        {content}
      </button>
    </div>
  );

  if (isOutOfStock) {
    return renderButton("Out of Stock", true, "Out of stock");
  }

  if (isVariantUnselected) {
    return renderButton("Add to Cart", true, "Please select an option");
  }

  const content = children;

  return renderButton(content, disabled);
};

const ArrowButton: React.FC<ArrowButtonProps> = ({
  children,
  type,
  onClick,
  className,
  disabled,
}) => {
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export { Button, AddToCartButton, buttonVariants, ArrowButton };
