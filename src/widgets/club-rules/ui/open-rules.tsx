"use client";
import { AnimatePresence } from "framer-motion";

import { useState } from "react";
import { rulesButtonText, rulesSectionDescription } from "../lib";
import RulesList from "./rules-list";

const styles = {
  button: "underline decoration-skip-ink-none text-white",
  description: "mt-[20px]",
};

const OpenRules = () => {
  const [isRulesVisible, setIsRulesVisible] = useState<boolean>(false);

  const handleButtonClick = () => {
    setIsRulesVisible(true);
  };

  return (
    <>
      <p className={styles.description}>
        {rulesSectionDescription.main}

        {!isRulesVisible && (
          <button className={styles.button} onClick={handleButtonClick}>
            {rulesButtonText}
          </button>
        )}
      </p>

      {isRulesVisible && <RulesList />}
    </>
  );
};

export default OpenRules;
