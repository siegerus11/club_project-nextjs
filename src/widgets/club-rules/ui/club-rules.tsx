import { RulesValues } from "@/entities/company";
import { cn } from "@/shared/lib";
import { Heading } from "@/shared/ui";
import { rulesSectionTitle, rulesSectionDescription } from "../lib";

const descriptionCommon = "";

const styles = {
  root: "py-[30px] px-0",
  title: "text-[2.5em] text-center leading-one tracking-base",
  wrapper: "mt-[20px] text-sm leading-main tracking-base text-white-70",
  description: {
    greeting: cn(descriptionCommon, ""),
    main: cn(descriptionCommon, "mt-[20px]"),
  },
  rulesList: "mt-[30px] pl-[20px] list-[number]",
  rulesListItem: "mb-[15px] ",
};

const ClubRules = () => {
  return (
    <section className={styles.root}>
      <Heading
        className={styles.title}
        level="h1"
        title={rulesSectionTitle}
        gradientType="white"
      />
      <div className={styles.wrapper}>
        <span className={styles.description.greeting}>
          {rulesSectionDescription.greeting}
        </span>
        <p className={styles.description.main}>
          {rulesSectionDescription.main}
        </p>

        <ol className={styles.rulesList}>
          {RulesValues.map((value, i) => {
            const keyValue = `${value}-${i}`;
            return (
              <li className={styles.rulesListItem} key={keyValue}>
                {value}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default ClubRules;
