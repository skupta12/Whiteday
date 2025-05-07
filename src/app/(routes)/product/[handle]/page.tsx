import { Container } from "@/components";
import {
  ProductDescription,
  ProductProvider,
} from "@/components/product";
import { HIDDEN_PRODUCT_TAG } from "@/lib/constants";
import { getProduct } from "@/lib/shopify";
import styles from "@/styles";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Image } from "@/lib/shopify/types";
import { MobileGallery, DesktopGallery } from "@/components/product/galleries";

export async function generateMetadata(props: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable,
      },
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt,
            },
          ],
        }
      : null,
  };
}

export default async function ProductPage(props: {
  params: Promise<{ handle: string }>;
}) {
  const params = await props.params;
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      "@type": "AggregateOffer",
      availability: product.availableForSale
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount,
    },
  };

  return (
    <ProductProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd),
        }}
      />
      <section className={`${styles.sectionPadding}`}>
        <Container size="1400px">
          <div className="grid grid-cols-12 relative md:gap-13 gap-y-10">
            <div className="md:col-span-6 col-span-12">
              <div className="md:block hidden">
                <DesktopGallery
                  images={product.images.slice(0, 3).map((image: Image) => ({
                    src: image.url,
                    altText: image.altText,
                  }))}
                />
              </div>
              <div className="md:hidden block">
                <MobileGallery
                  images={product.images.slice(0, 3).map((image: Image) => ({
                    src: image.url,
                    altText: image.altText,
                  }))}
                />
              </div>
            </div>

            <div className="md:col-span-6 col-span-12 self-start sticky top-14">
              <Suspense fallback={null}>
                <ProductDescription product={product} />
              </Suspense>
            </div>
          </div>
        </Container>
      </section>
    </ProductProvider>
  );
}
