import { Container } from "@/components";
import styles from "@/styles";
import Link from "next/link";
import Image from "next/image";
import ManImage from "/public/man.jpg";
import WomanImage from "/public/woman.jpg";
import { InfinitiveScrollerGroup } from "@/components/ui/infinitive-scroller";

export const Hero: React.FC = () => {
  return (
    <section className="hero-section lg:pb-20 md:pb-14 pb-10">
      <Container>
        <div className="text-center sm:block hidden">
          <h1 className={styles.homeHeading}>White day</h1>
        </div>

        <div className="grid grid-cols-12 md:gap-12 gap-y-10">
          <div className="md:col-span-6 col-span-12 relative overflow-hidden group duration-200">
            <Link href="/search/men">
              <Image
                priority
                className="w-full h-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                src={ManImage}
                alt="Image of man"
              />
              <div
                className="absolute top-1/2 left-1/2 transform 
                -translate-1/2 md:text-[5vw] text-[50px] font-medium uppercase text-white"
              >
                Men
              </div>

              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <InfinitiveScrollerGroup length={20} duration={5} title="Men" />
              </div>
            </Link>
          </div>

          <div className="md:col-span-6 col-span-12 relative overflow-hidden group duration-200">
            <Link href="/search/women">
              <Image
                priority
                className="w-full h-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                src={WomanImage}
                alt="Image of man"
              />
              <div
                className="absolute top-1/2 left-1/2 transform 
                -translate-1/2 md:text-[5vw] text-[50px] font-medium uppercase text-white"
              >
                Women
              </div>

              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <InfinitiveScrollerGroup length={15} duration={5} title="Women"
                />
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
