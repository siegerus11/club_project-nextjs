import { loyaltyLevels, LoyaltyLevel } from "@/entities/company";
import { cn } from "@/shared/lib";
import { Heading } from "@/shared/ui";
import { Container } from "@/shared/ui/container";
import { loyaltiesTitle, loyaltiesDescription } from "../lib";
import LoyaltyCard from "./loyalty-card";

const descriptionCommon =
  "max-w-[315px] md:max-w-[500px] mt-[10px] md:mt-[20px] mx-auto text-sm md:text-base text-center leading-main tracking-base text-white-70";

const styles = {
  root: "pt-[10px] pb-[30px] md:pt-[30px] md:pb-[120px] ",
  container: "container-tablet-override",
  title:
    "md:min-w-[657px] title-responsive leading-[0.8] lg:leading-small tracking-base md:whitespace-nowrap",
  description: {
    mobile: cn(descriptionCommon, "md:hidden"),
    desktop: cn(descriptionCommon, "hidden md:block"),
  },
  cardList:
    "grid grid-cols-1 md:grid-cols-[repeat(3,313px)] grid-rows-[repeat(3,minmax(575px,auto))] auto-rows-[minmax(575px,auto)] md:grid-rows-[minmax(752px,auto)] md:auto-rows-[minmax(752px,auto)] gap-y-[10px] md:gap-x-[21px] mt-[20px] md:mt-[55px] ",
  listItem: "w-full h-full",
  scrollBlock: "overflow-x-scroll",
};

const Loyalties = () => {
  return (
    <section className={styles.root}>
      <Container>
        <Heading
          className={styles.title}
          level="h1"
          title={loyaltiesTitle}
          gradientType="white"
        />
        <p className={styles.description.mobile}>
          {loyaltiesDescription.mobile}
        </p>
        <p className={styles.description.desktop}>
          {loyaltiesDescription.desktop}
        </p>
      </Container>
      <Container containerClass={styles.container}>
        <div className={styles.scrollBlock}>
          <ul className={styles.cardList}>
            {loyaltyLevels.map((level: LoyaltyLevel, i) => {
              const keyValue = `${level.name}-${i}`;
              return (
                <li className={styles.listItem} key={keyValue}>
                  <LoyaltyCard
                    key={keyValue}
                    name={level.name}
                    description={level.description}
                    imagePath={level.imagePath}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Loyalties;
