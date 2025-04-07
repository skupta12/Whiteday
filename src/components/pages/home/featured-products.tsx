import { Container } from "@/components";
import { HomeCollectionList } from ".";
import { getCollectionProducts } from "@/lib/shopify";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ProductCardItem } from "@/components/product";
import { InfinitiveScrollerGroup } from "@/components/ui/infinitive-scroller";
import styles from "@/styles";

interface FeaturedProductsProps {
  className?: string;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = async ({
  className,
}) => {
  const products = await getCollectionProducts({
    collection: "hidden-featured",
  });

  return (
    <section className={`featured-products-section ${styles.sectionPadding}`}>
      <Container>
        <HomeCollectionList />

        <div className={cn("grid grid-cols-12 gap-6", className)}>
          {products.map((product) => (
            <div
              key={product.handle}
              className="lg:col-span-4 col-span-12 border animate-fade-in relative overflow-hidden group"
            >
              <Link prefetch href={`/product/${product.handle}`}>
                <ProductCardItem
                  width={600}
                  height={900}
                  alt={product.title}
                  label={{
                    title: product.title,
                    amount: product.priceRange.maxVariantPrice.amount,
                    currencyCode:
                      product.priceRange.minVariantPrice.currencyCode,
                  }}
                  src={product.featuredImage?.url}
                  className="w-full aspect-[2/3] object-cover"
                />
              </Link>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <InfinitiveScrollerGroup
                  title="Buy now"
                  length={15}
                  duration={5}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="md:block hidden separator h-[100px]" />
      </Container>
    </section>
  );
};
