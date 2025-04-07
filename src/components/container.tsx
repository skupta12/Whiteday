import { cn } from "@/lib/utils";

interface WidthWrapperProps {
  children: React.ReactNode;
  size?: string;
  className?: string;
}

export const Container: React.FC<WidthWrapperProps> = ({
  children,
  size = "1930px",
  className
}) => {
  return (
    <div style={{ maxWidth: size }} className={cn("mx-auto w-full px-4 sm:px-7 relative", className)}>
      {children}
    </div>
  );
};
