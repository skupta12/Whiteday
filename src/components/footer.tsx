import styles from "@/styles";
import { Container } from "./container";
import Link from "next/link";
import { footerLinks, socialMedia } from "@/constants";
import { Input } from "./ui";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.sectionPadding}>
      <Container>
        <div className="grid grid-cols-12 gap-6">
          <div className="lg:col-span-4 col-span-12">
            <h3 className={`${styles.headingH1} uppercase leading-[0.8] lg:mb-10 mb-5`}>
              white day
            </h3>
            <p className={styles.paragraph}>
              Designed by{" "}
              <Link
                className="underline"
                target="_blank"
                href="https://www.webestica.com"
              >
                Webestica
              </Link>
            </p>
          </div>
          <div className="lg:col-span-8 col-span-12">
            <div className="grid grid-cols-12 gap-6 justify-between text-white">
              {footerLinks.map((item) => (
                <div key={item.id} className="lg:col-span-2 col-span-6">
                  <ul>
                    <li>
                      <h6 className={`mb-5 ${styles.headingH6}`}>
                        {item.title}
                      </h6>

                      {item.links.map((item) => (
                        <Link
                          className="text-[18px] uppercase flex flex-col mb-6
                           hover:text-neutral-500 transition-colors duration-500"
                          href={item.path}
                          key={item.id}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </li>
                  </ul>
                </div>
              ))}
              <div className="lg:col-span-4 col-span-12">
                <h6 className={`mb-5 ${styles.headingH6}`}>
                  SUBSCRIBE FOR UPDATE
                </h6>
                <div className="relative">
                  <Input placeholder="Enter your email" />
                  <button className="text-white absolute right-0 top-[10px] cursor-pointer">
                    Submit
                  </button>
                </div>
              </div>
              <div className="lg:col-span-4 col-span-12">
                <h6 className={`mb-5 ${styles.headingH6}`}>SOCIAL MEDIA</h6>
                <div className="flex items-center gap-4">
                {socialMedia.map((item) => (
                  <Link href={item.href} key={item.id}>
                    <item.icon size={28} />
                  </Link>
                ))}
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
