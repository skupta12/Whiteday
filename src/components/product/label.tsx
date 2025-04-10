
import { cn } from "@/lib/utils";
import { Price } from "./price";

interface LabelProps {
  title: string;
  amount: string;
  currencyCode: string;
}

export const Label: React.FC<LabelProps> = ({
  title,
  amount,
  currencyCode,
}) => {
  return (
    <div
      className={cn(
        "absolute bottom-[6%] left-[10%] flex w-full",
      )}
    >
      <div>
        <h3 className="mb-2 text-[20px] font-medium uppercase">
          {title}
        </h3>
        <Price
          className="text-base"
          amount={amount}
          currencyCode={currencyCode}
          currencyCodeClassName="hidden"
        />
      </div>
    </div>
  );
};