import { getCollections } from "@/lib/shopify";
import clsx from "clsx";
import { Suspense } from "react";
import { FilterList } from "./filter";

async function CollectionList() {
  const collections = await getCollections();
  return <FilterList list={collections} />;
}

const skeleton = "mb-3 h-13 w-full animate-pulse bg-neutral-700";
const items = "bg-neutral-400";

export default function Collections() {
  return (
    <>
      <Suspense
        fallback={
          <div className="hidden h-[400px] w-full flex-none lg:block">
            <div className={clsx(skeleton, items)} />
            <div className={clsx(skeleton, items)} />
            <div className={clsx(skeleton, items)} />
            <div className={clsx(skeleton, items)} />
            <div className={clsx(skeleton, items)} />
            <div className={clsx(skeleton, items)} />
          </div>
        }
      >
        <CollectionList />
      </Suspense>
    </>
  );
}
