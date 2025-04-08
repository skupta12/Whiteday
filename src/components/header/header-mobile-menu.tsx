"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import styles from "@/styles";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation"; // Импорт usePathname

export const HeaderMobileMenu: React.FC = () => {
  
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* mobile */}
      <div className="lg:hidden block">
        <div className="burger-menu">
          <button
            aria-label="burger menu"
            onClick={() => setOpen(!open)}
            className="flex flex-col px-3 py-4 cursor-pointer bg-white"
          >
            <span className="w-[22px] h-[2px] bg-black"></span>
            <span className="w-[22px] h-[2px] bg-black my-[3px]"></span>
            <span className="w-[22px] h-[2px] bg-black"></span>
          </button>
        </div>

        <nav
          className={`absolute bg-black border min-w-[192px]
    right-0 z-11 p-4 top-0 justify-start
    ${!open ? "transform -translate-y-[100%]" : "transform translate-y-[35%]"}`}
        >
          <ul className="flex w-full flex-col gap-y-3">
            <li className={styles.mobileNav}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.mobileNav}>
              <Link href="/search">Shop</Link>
            </li>
            <li>
              <DropdownMenu>
              <DropdownMenuTrigger
                  className="flex items-center text-white font-medium 
                  xs:text-[30px] text-[24px] uppercase"
                >
                  Pages
                  <ChevronDown size={32} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="pr-[2px]" align="start">
                  {(navLinks.find((item) => item.dropdown)?.dropdown || []).map(
                    (item) => (
                      <DropdownMenuItem key={item.title}>
                        <Link
                          className="text-[20px] font-medium text-black"
                          href={item.path}
                        >
                          {item.title}
                        </Link>
                      </DropdownMenuItem>
                    )
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li className={styles.mobileNav}>
              <Link href="/about-us">About us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
