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

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  href,
  type,
  variant,
  disabled,
  onClick,
}) => {
  const buttonContent = (
    <div className="h-full border border-black bg-white inline-block p-[3px]">
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

  if (href) {
    return (
      <Link
        href={href}
      >
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
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
