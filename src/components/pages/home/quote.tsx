import { Container } from "@/components";
import styles from "@/styles";
import Image from "next/image";
import QuoteImage from "/public/quote.jpg";
import { Button } from "@/components/ui";

export const Quote: React.FC = () => {
  return (
    <section className={`quote-section lg:pt-0 lg:pb-17 py-10`}>
      <Container>
        <div className="grid grid-cols-12 lg:gap-12 sm:gap-10 gap-6 items-center">
          <div className="lg:col-span-8 col-span-12 text-right">
            <h2 className={styles.headingH2}>
              ONCE AGAIN WHITE DAY DEFIES THE ODDS WITH THE 2K22 WHITE DAY
              COLLECTION.
            </h2>
            <div className="divider w-full bg-white h-[2px] mt-6" />
            <p className={`${styles.paragraph} my-5`}>
              A collection of bad ideas come to fruition as <br /> real products
              for you to experience.
            </p>
            <Button type="button" href="/search">VIEW ALL PRODUCTS</Button>
          </div>
          <div className="lg:col-span-4 col-span-12">
            <div className="w-full h-[433px] relative overflow-hidden">
              <Image
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
                src={QuoteImage}
                alt="Quote image"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
