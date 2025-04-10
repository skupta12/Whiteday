"use client";

import { createUrl } from "@/lib/utils";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export const SearchForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const val = e.target as HTMLFormElement;
    const search = val.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());
    if (search.value) {
      newParams.set("q", search.value);
    } else {
      newParams.delete("q");
    }
    router.push(createUrl("/search", newParams));
  }

  return (
    <form
      onSubmit={onSubmit}
      className="w-max-[550px] relative w-full lg:w-80 xl:w-full"
    >
      <input
        key={searchParams?.get("q")}
        type="text"
        name="search"
        placeholder="Search for products..."
        autoComplete="off"
        defaultValue={searchParams?.get("q") || ""}
        className="text-md w-full rounded-lg border bg-white px-4 py-2
         text-black placeholder:text-neutral-500 md:text-sm"
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <Search size={16} />     {" "}
      </div>
    </form>
  );
};
export function SearchSkeleton() {
  return (
    <form className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full rounded-lg border bg-white px-4 py-2 text-sm
         text-black placeholder:text-neutral-500"
      />{" "}
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <Search size={16} />
      </div>
    </form>
  );
}
