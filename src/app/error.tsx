"use client";

export default function Error() {
  return (
    <div
      className=" text-center mx-auto my-61 flex max-w-xl flex-col rounded-lg 
      border border-neutral-200 bg-white p-8 md:p-12 dark:border-neutral-800 dark:bg-black"
    >
      <p className="my-2 text-white">
      An error occurred while requesting products from the Shopify API. Please reload the page.
      </p>
    </div>
  );
}
