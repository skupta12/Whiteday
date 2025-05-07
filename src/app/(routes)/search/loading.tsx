import { Skeleton } from "@/components/ui";

export default function Loading() {
  return (
    <>
      <div className="grid grid-cols-12 gap-5">
        {Array(6)
          .fill(0)
          .map((_, index) => {
            return (
              <Skeleton className="bg-neutral-800 w-full aspect-[2/3] md:col-span-6 col-span-12" key={index}/>
            );
          })}
      </div>
    </>
  );
}