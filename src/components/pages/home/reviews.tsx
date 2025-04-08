import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import { heroReviews } from "@/constants";
import styles from "@/styles";

export const Reviews: React.FC = () => {
  return (
    <section className={`review-section ${styles.sectionPadding}`}>
      <Carousel className="w-full max-w-[1600px] mx-auto lg:px-5">
        <CarouselContent>
          {heroReviews.map((item) => (
            <CarouselItem className="text-center select-none" key={item.id}>
              <q
                className="block p-1 uppercase font-semibold text-white 
                lg:text-[64px] sm:text-[39px] text-[23px] leading-[1.3]"
              >
                {item.title}
              </q>
              <p
                className="mt-2 text-white lg:text-[38px] 
                sm:text-[28px] text-[23px]"
              >
                - {item.author}
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="xl:block hidden">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </section>
  );
};
