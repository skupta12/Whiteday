"use client";

import { Container } from "@/components";
import styles from "@/styles";
import Image from "next/image";
import ShopAllImage1 from "/public/shop-all-image-1.jpg";
import ShopAllImage2 from "/public/shop-all-image-2.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const ShopAll: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!isHovered) return;
      const { clientX } = event;
      const centerX = window.innerWidth / 2;
      setOffset((clientX - centerX) * 0.05);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHovered]);

  return (
    <section
      className={`${styles.sectionPadding}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Container>
        <Link href="/search" className="relative block">
          <div className="text-center">
            <h1 className={styles.homeHeading}>shop all</h1>
          </div>

          <motion.div
            className="absolute top-10 2xl:left-110 left-50 -z-1 transform rotate-12 lg:block hidden"
            animate={{ x: isHovered ? -offset : 0 }}
            transition={{ type: "tween", stiffness: 100 }}
          >
            <Image
              className="2xl:w-[355px] w-[222px] 2xl:h-[355px] h-[222px]"
              src={ShopAllImage1}
              alt="Shop all image 1"
            />
          </motion.div>

          <motion.div
            className="absolute top-5 right-50 -z-1 transform rotate-15 lg:block hidden"
            animate={{ x: isHovered ? offset : 0 }}
            transition={{ type: "tween", stiffness: 100 }}
          >
            <Image
              className="2xl:w-[355px] w-[222px] 2xl:h-[355px] h-[222px]"
              src={ShopAllImage2}
              alt="Shop all image 2"
            />
          </motion.div>
        </Link>
      </Container>
    </section>
  );
};
