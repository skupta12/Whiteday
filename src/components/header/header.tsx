"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CartModal } from "../cart/cart-modal";
import styles from "@/styles";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { Container } from "../container";
import { HeaderDropdown, HeaderMobileMenu } from ".";

interface HeaderProps {
  className?: string;
}

const NavItem: React.FC<{
  href: string;
  currentPath: string;
  label: string;
}> = ({ href, currentPath, label }) => (
  <li className={cn(styles.nav, currentPath === href && "text-neutral-400")}>
    <Link href={href}>{label}</Link>
  </li>
);



export const Header: React.FC<HeaderProps> = ({ className }) => {



  const currentPath = usePathname();

  return (
    <header className={cn("bg-black", className)}>
      <Container>
        <div className="flex items-center justify-between py-6">
          <Link href="/">
            <div className="xl:text-[63px] sm:text-[52px] 
            xs:text-[35px] text-[25px] font-bold text-white uppercase leading-tight">
              whiteday
            </div>
          </Link>
          <div className="flex items-center lg:gap-x-10">
            {/* Desktop Navigation */}
            <nav className="lg:block hidden">
              <ul className="text-sm flex gap-10 md:items-center">
                {navLinks.map((item) =>
                  item.dropdown ? (
                    <li key={item.id}>
                      <HeaderDropdown
                        currentPath={currentPath}
                        items={item.dropdown}
                        label={item.title}
                      />
                    </li>
                  ) : (
                    <NavItem
                      key={item.id}
                      href={item.path}
                      currentPath={currentPath}
                      label={item.title}
                    />
                  )
                )}
              </ul>
            </nav>
            <CartModal />
            <HeaderMobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
};
