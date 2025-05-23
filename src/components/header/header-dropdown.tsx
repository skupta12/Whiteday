"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface HeaderDropdownProps {
  currentPath: string;
  label: string;
  items: { title: string; path: string }[];
}

export const HeaderDropdown: React.FC<HeaderDropdownProps> = ({
  currentPath,
  items,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger
        className="text-white flex items-center font-medium xl:text-[36px] 
        text-[24px] uppercase outline-none cursor-pointer"
      >
        Pages
        <ChevronDown size={32} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {items.map((item) => (
          <DropdownMenuItem
            key={item.title}
          >
            <Link
              onClick={() => setOpen(false)}
              className={cn(
                "text-[30px] font-medium",
                currentPath === item.path ? "text-neutral-400" : "text-black"
              )}
              href={item.path}
            >
              {item.title}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
