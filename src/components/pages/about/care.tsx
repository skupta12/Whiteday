import { Container } from "@/components";
import CareImage from "/public/care-image.jpg";
import Image from "next/image";
import styles from "@/styles";
import { cn } from "@/lib/utils";
import { careList } from "@/constants";

interface CareProps {
  className?: string;
}

export const Care: React.FC<CareProps> = ({ className }) => {
  return (
    <section className={cn(styles.sectionPadding, className)}>
      <Container>
        <div className="grid grid-cols-12 gap-6 relative">
          <div className="lg:col-span-6 col-span-12 h-full">
            <Image
              width={900}
              height={600}
              src={CareImage}
              alt="The clothes image"
            />
          </div>
          <div className="lg:col-span-6 col-span-12 isolate flex flex-col gap-y-10">
            <h2
              className="xl:text-[96px] lg:text-[60px] md:text-[96px] 
            sm:text-[60px] text-[30px] font-medium text-white leading-tight uppercase 
            lg:-ml-[250px]"
            >
              Care and love for the environment
            </h2>
            <ul
              className="text-white list-disc list-inside xl:text-[28px] 
            lg:text-[20px] md:text-[28px] text-[20px] leading-tight font-inter"
            >
              {careList.map((item) => (
                <li className="mb-3" key={item.id}>{item.text}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
