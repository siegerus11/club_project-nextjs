import { loyaltyLevels, LoyaltyLevel } from "@/entities/company";
import { Heading } from "@/shared/ui";
import { loyaltiesTitle, loyaltiesDescription } from "../lib";
import LoyaltyCard from "./loyalty-card";

const styles = {
  root: "pt-[10px] pb-[30px] ",
  title: "title-responsive leading-[0.8] lg:leading-small tracking-base",
  description:
    "max-w-[315px] mt-[10px] mx-auto text-sm text-center leading-main tracking-base text-white-70",
  cardList: "mt-[20px] ",
  scrollBlock: "overflow-x-scroll",
};

const Loyalties = () => {
  return (
    <section className={styles.root}>
      <Heading
        className={styles.title}
        level="h1"
        title={loyaltiesTitle}
        gradientType="white"
      />
      <p className={styles.description}>{loyaltiesDescription}</p>
      <div className={styles.scrollBlock}>
        <ul className={styles.cardList}>
          {loyaltyLevels.map((level: LoyaltyLevel, i) => {
            const keyValue = `${level.name}-${i}`;
            return (
              <li key={keyValue}>
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
    </section>
  );
};

export default Loyalties;
