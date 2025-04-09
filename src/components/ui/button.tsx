import { cn } from "@/lib/utils";
import styles from "@/styles";
import { cva } from "class-variance-authority";
import Link from "next/link";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  type: "button" | "submit" | undefined;
  variant?: "default" | "revert";
  size?: string;
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

const wrapperClasses = "h-full border border-black bg-white inline-block p-[3px]";

const renderButton = (
  children: React.ReactNode,
  className?: string,
  type: "button" | "submit" = "button",
  onClick?: () => void,
  disabled?: boolean
) => (
  <div className={wrapperClasses}>
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(buttonVariants({ variant: "default" }), className)}
    >
      {children}
    </button>
  </div>
);

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  href,
  type = "button",
  variant = "default",
  disabled = false,
  onClick,
  availableForSale = true,
  selectedVariantId,
}) => {
  const commonClass = cn(buttonVariants({ variant }), className);

  // Out of stock
  if (!availableForSale) {
    return renderButton("Out of Stock", commonClass, type, onClick, true);
  }

  // No variant selected
  if (!selectedVariantId) {
    return renderButton("Add to Cart", commonClass, type, onClick, true);
  }

  // With link
  if (href) {
    return (
      <Link href={href}>
        {renderButton(children, commonClass, type, onClick, disabled)}
      </Link>
    );
  }

  // Default button
  return renderButton(children, commonClass, type, onClick, disabled);
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

export { Button, buttonVariants, ArrowButton };
