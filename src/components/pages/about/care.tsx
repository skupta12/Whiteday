import { Container } from "@/components";
import CareImage from "/public/care-image.jpg";
import Image from "next/image";
import styles from "@/styles";
import { cn } from "@/lib/utils";

interface CareProps {
  className?: string;
}

export const Care: React.FC<CareProps> = ({ className }) => {
  return (
    <section className={cn(styles.sectionPadding, className)}>
      <Container>
        <div className="grid grid-cols-12 gap-4 relative">
          <div className="col-span-6">
            <Image
              width={900}
              height={600}
              src={CareImage}
              alt="The clothes image"
            />
          </div>
          <div className="col-span-6 place-content-end">
            <h2 className="text-[96px] font-medium text-white uppercase absolute top-0 left-1/3">
            Care and love for the environment</h2>
            <ul className="text-white list-disc list-inside text-[28px] leading-[2] font-inter">
              <li>Lorem ipsum dolor sit amet consectur dolor sit.</li>
              <li>
                Scelerisque est. scelerisque libero, placerat nec cursus
                ultrices.
              </li>
              <li>
                Elit scelerisque mauris pellentesque pulvinar pellentesque.
              </li>
              <li>
                Donec odio efficitur. faucibus ex dui. dui. ipsum lacus,
                facilisis vehicula, amet, varius vel eget odio eget commodo at.
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
