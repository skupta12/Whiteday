import { Container } from "@/components";
import { Suspense } from "react";
import ChildrenWrapper from "./children-wrapper";
import styles from "@/styles";
import Collections from "@/components/search/collections";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={`${styles.sectionPadding}`}>
      <Container size="1800px">
        <div className={`text-center mb-5 ${styles.headingH1}`}>Shop</div>
        <div className="flex lg:flex-row flex-col gap-9">
          <div className="xl:min-w-[430px] lg:min-w-[350px]">
            <Collections/>
          </div>

          <div className="flex-1">
            <Suspense fallback={null}>
              <ChildrenWrapper>{children}</ChildrenWrapper>
            </Suspense>
          </div>

          {/* <div className="order-none flex-none md:order-last md:w-[125px]">
            <FilterList list={sorting} title="Sort by" />
          </div> */}
        </div>
      </Container>
    </section>
  );
}
