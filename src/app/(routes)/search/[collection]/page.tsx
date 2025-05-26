import { ProductCard } from "@/components/product";
import { defaultSort, sorting } from "@/lib/constants";
import { getCollectionProducts } from "@/lib/shopify";
import Loading from "../loading";

export default async function CategoryPage(props: {
  params: Promise<{ collection: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const params = await props.params;

  const { sort } = searchParams as { [key: string]: string };
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;

  const products = await getCollectionProducts({
    collection: params.collection,
    sortKey,
    reverse,
  });
  return (
    <section>
      {products.length === 0 ? (
        <Loading/>
      ) : (
        <ProductCard products={products} />
      )}
    </section>
  );
}
