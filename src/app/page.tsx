import {
  FeaturedProducts,
  Hero,
  Insta,
  Quote,
  Reviews,
  ShopAll,
} from "@/components/pages/home";

export default function Home() {
  return (
    <>
      <Hero />
      <Reviews />
      <FeaturedProducts />
      <Quote />
      <Insta />
      <ShopAll />
    </>
  );
}
