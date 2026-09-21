import { motion } from "framer-motion";
import { RulesValues } from "@/entities/company";

const styles = {
  rulesList: "mt-[30px] pl-[20px] list-[number]",
  rulesListItem: "mb-[15px] ",
};

const RulesList = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
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
    </motion.div>
  );
};

export default RulesList;
