import { collections } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface HomeCollectionListProps {
  className?: string;
}

export const HomeCollectionList: React.FC<HomeCollectionListProps> = ({ // TODO: Fetch categories list from shopify
  className,
}) => {
  return (
    <nav className={cn("mb-6 sticky md:top-[85%] left-0 z-1", className)}>
      <ul className="flex justify-center items-center gap-7 flex-wrap">
        {collections.map(({ title, path, id }) => (
          <li
            className="text-black bg-[#FAF9F380] backdrop-blur-2xl text-[24px] 
          uppercase py-[8px] px-[10px] hover:bg-white border transition-colors duration-500"
            key={id}
          >
            <Link href={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
