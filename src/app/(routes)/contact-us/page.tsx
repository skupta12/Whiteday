"use client";

import { Container } from "@/components";
import { z } from "zod";
import styles from "@/styles";


export default function ContactUs() {
  return (
    <section>
      <Container>
        <div className="lg:py-17 py-10 border-b border-white">
          <div className="text-center">
            <h1 className={styles.headingH1}>Contact Us</h1>
          </div>
        </div>

        <div className="lg:py-17 py-10 border-b border-white">
          <div className="grid grid-cols-2">
            <h2 className={styles.headingH2}>how to find us</h2>
            <p className={`${styles.paragraph} leading-[2]`}>
              +01 598 269 4756 <br /> Info@example.com <br /> HS B26, Horton
              Ford Rd, Eidson, TN, 37731
            </p>
          </div>
        </div>

        <div className="lg:py-17 py-10 border-b border-white">
          <div className="grid grid-cols-2">
            <h2 className={styles.headingH2}>get in touch</h2>
            <div className={`${styles.paragraph} leading-[2]`}>
              {/* <InputForm /> */}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

