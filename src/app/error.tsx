"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div
      className=" text-center mx-auto my-61 flex max-w-xl flex-col rounded-lg 
      border border-neutral-200 bg-white p-8 md:p-12 dark:border-neutral-800 dark:bg-black"
    >
      <h2 className="text-xl font-bold text-white">Oh no!</h2>
      <p className="my-2 text-white">
        If you&apos;re seeing this, product loading was successful. Please
        reload the page.
      </p>
      <div className="h-full border border-black bg-white inline-block p-[3px] mt-4">
        <button
          onClick={() => reset()}
          className="bg-white w-full text-black hover:bg-black p-[8px] hover:text-white 
          border border-black font-inter font-normal py-[10px] px-[30px] 
          text-[18px] uppercase cursor-pointer duration-500"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
