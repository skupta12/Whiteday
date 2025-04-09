export const CartNumber = ({
    quantity,
  }: {
    className?: string;
    quantity?: number;
  }) => {
    return (
      <>
          <div
            className="flex flex-col justify-center items-center 
            rounded-full h-6 w-6 bg-white p-1 text-[13px] font-medium text-black"
          >
            {quantity}
          </div>
      </>
    );
  };