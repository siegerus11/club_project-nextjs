import { Heading } from "@/shared/ui";
import { rulesSectionTitle, rulesSectionDescription } from "../lib";
import OpenRules from "./open-rules";

const styles = {
  root: "py-[30px] px-0",
  title: "text-[2.5em] text-center leading-one tracking-base",
  wrapper: "mt-[20px] text-sm leading-main tracking-base text-white-70",
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
        <span>{rulesSectionDescription.greeting}</span>
        <OpenRules />
      </div>
    </section>
  );
};

export default ClubRules;
