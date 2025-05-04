import { Container } from "@/components";
import Image from "next/image";
import AboutImage from "/public/about-image.jpg";
import styles from "@/styles";
import { cn } from "@/lib/utils";

interface HeroProps {
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section className={cn(styles.sectionPadding, className)}>
      <Container>
        <h1
          className="text-white 3xl:text-[192px] text-[10vw] 
        leading-[0.8em] whitespace-nowrap uppercase font-semibold"
        >
          About whiteday
        </h1>
        <div className="my-10">
          <Image
            priority
            className="w-full h-full"
            src={AboutImage}
            alt="The about image"
          />
        </div>
        <div className="max-w-[1400px] ml-auto">
          <p className="md:text-[36px] sm:text-[30px] text-[20px] text-white mb-5">
            At WHITE DAY, we want the right choice to be as easy as putting on a
            great T-shirt. That&apos;s why we partner with the best, ethical
            factories around the world. Source only the finest materials. And
            share those stories with you down to the true cost of every product
            we make. It&apos;s a new way of doing things. We call it Radical
            Transparency.
          </p>

          <p className={styles.paragraph}>
            Size-like body someone had. Are conduct viewing boy minutes warrant
            the expense? Tolerably behavior may admit daughters offending her
            ask own. Praise effect wishes to change way and any wanted. Lively
            use looked latter regard had. Does he part last? Merits ye if Mr
            narrow points. Melancholy particularly Devonshire alteration its
            favorable appearance up. no purse as fully me or point.
          </p>
        </div>
      </Container>
    </section>
  );
};
