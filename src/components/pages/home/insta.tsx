import { Container } from "@/components";
import { insta } from "@/constants";
import { cn } from "@/lib/utils";
import styles from "@/styles";
import Image from "next/image";
import Link from "next/link";

interface InstaProps {
  className?: string;
}

export const Insta: React.FC<InstaProps> = ({ className }) => {
  return (
    <section
      className={`insta-section ${styles.sectionPadding} lg:block hidden`}
    >
      <Container>
        <div className={cn("grid grid-cols-12 gap-0", className)}>
          {insta.map((item) => {
            if (item.id === 9) {
              return (
                <div
                  key={item.id}
                  className="col-span-4 flex flex-col justify-center items-center p-2 text-center"
                >
                  <h3 className={`${styles.headingH3} uppercase`}>
                    White day is everyday <br />
                  </h3>

                  <Link target="_blank" className={styles.headingH3} href="https://www.instagram.com">
                    <span className="font-normal font-inter underline">
                      @insta
                    </span>
                  </Link>
                </div>
              );
            }

            if (item.id === 10) return null;

            return (
              <div key={item.id} className="col-span-2">
                {item.href ? (
                  <Image
                    className="w-full"
                    src={item.href}
                    alt="Insta image"
                    width={312}
                    height={312}
                  />
                ) : (
                  <div className="w-full h-full bg-black" />
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
