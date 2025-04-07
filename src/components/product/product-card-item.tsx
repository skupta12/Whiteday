import Image from 'next/image';
import { Label } from './label';

export function ProductCardItem({
  label,
  ...props
}: {
  active?: boolean;
  label?: {
    title: string;
    amount: string;
    currencyCode: string;
    position?: 'bottom' | 'center';
  };
} & React.ComponentProps<typeof Image>) {
  return (
    <div
      className='group h-full w-full items-center justify-center overflow-hidden'
    >
      {props.src ? (
        <Image
          loading='eager'
          {...props}
        />
      ) : null}
      {label ? (
        <Label
          title={label.title}
          amount={label.amount}
          currencyCode={label.currencyCode}   
        />
      ) : null}
    </div>
  );
}