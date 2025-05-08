"use client";

import { Container } from "@/components";
import { InputForm } from "@/components/ui/input-form";
import styles from "@/styles";

export default function ContactUs() {
  return (
    <section>
      <Container>
        <div className="lg:py-17 py-10 border-b border-white text-center">
          <h1 className={styles.headingH1}>Contact Us</h1>
        </div>

        <div className="lg:py-17 py-10 border-b border-white grid grid-cols-2">
          <h2 className={styles.headingH2}>how to find us</h2>
          <p className={`${styles.paragraph} leading-[2]`}>
            +01 598 269 4756 <br /> Info@example.com <br /> HS B26, Horton Ford
            Rd, Eidson, TN, 37731
          </p>
        </div>

        <div className="lg:py-17 py-10 border-b border-white grid grid-cols-2">
          <h2 className={styles.headingH2}>get in touch</h2>

          <InputForm />
        </div>
      </Container>
    </section>
  );
}
