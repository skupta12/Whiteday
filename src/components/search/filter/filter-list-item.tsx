"use client";

import { cn, createUrl } from "@/lib/utils";
import Link from "next/link";
import type { SortFilterItem } from "@/lib/constants";
import { usePathname, useSearchParams } from "next/navigation";
import { ListItem } from "./filter-list";
import type { PathFilterItem } from "./filter-list";

const PathFilterItem = ({ item }: { item: PathFilterItem }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = pathname === item.path;
  const newParams = new URLSearchParams(searchParams.toString());
  const DynamicTag = active ? "p" : Link;

  newParams.delete("q");

  return (
    <li
      className="mb-3 flex text-center text-white border-2
      border-white hover:bg-white hover:text-black transition-colors duration-300"
      key={item.title}
    >
      <DynamicTag
      href={createUrl(item.path, newParams)}
      className={cn("w-full sm:text-[25px] text-[22px] p-2", {
        "bg-white text-black": active,
      })}
      >
      <span>{item.title}</span>
      </DynamicTag>
    </li>
  );
};

const SortFilterItem = ({ item }: { item: SortFilterItem }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = searchParams.get("sort") === item.slug;
  const q = searchParams.get("q");
  const href = createUrl(
    pathname,
    new URLSearchParams({
      ...(q && { q }),
      ...(item.slug && item.slug.length && { sort: item.slug }),
    })
  );
  const DynamicTag = active ? "p" : Link;

  return (
    <li className="mt-2 flex text-sm text-black" key={item.title}>
      <DynamicTag
        prefetch={!active ? false : undefined}
        href={href}
        className={cn("w-full hover:underline hover:underline-offset-4", {
          "underline underline-offset-4": active,
        })}
      >
        {item.title}
      </DynamicTag>
    </li>
  );
};

export const FilterListItem = ({ item }: { item: ListItem }) => {
  return "path" in item ? (
    <PathFilterItem item={item} />
  ) : (
    <SortFilterItem item={item} />
  );
};
