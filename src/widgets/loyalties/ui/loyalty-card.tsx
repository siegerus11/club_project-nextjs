import Image from "next/image";

import { LoyaltyLevel } from "@/entities/company";
import { cn } from "@/shared/lib";
import { BaseCard, Heading } from "@/shared/ui";

type LoyaltyCardProps = LoyaltyLevel & {};

const styles = {
  wrapper: "",
  title: "text-white",
  description: "",
  imageWrapper: "relative h-[241px]",
  image: "w-full h-full object-cover",
};

const LoyaltyCard = ({ name, description, imagePath }: LoyaltyCardProps) => {
  return (
    <BaseCard wrapperClass={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={imagePath.mobile}
          alt={name}
          fill
          sizes="100vw"
        />
        <Image
          className={styles.image}
          src={imagePath.tablet}
          alt={name}
          fill
          sizes="100vw"
        />
        <Image
          className={styles.image}
          src={imagePath.desktop}
          alt={name}
          fill
          sizes="100vw"
        />
      </div>
      <Heading
        className={styles.title}
        level="h2"
        title={name}
        gradientType="none"
      />
      <div className={styles.description}>{description}</div>
    </BaseCard>
  );
};

export default LoyaltyCard;
