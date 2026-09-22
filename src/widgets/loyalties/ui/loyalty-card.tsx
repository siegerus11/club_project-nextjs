import Image from "next/image";

import { LoyaltyLevel } from "@/entities/company";
import { cn } from "@/shared/lib";
import { BaseCard, Heading } from "@/shared/ui";

type LoyaltyCardProps = LoyaltyLevel & {};

const styles = {
  wrapper: "w-full h-full rounded-small",
  title:
    "mt-[10px] text-2xl text-center leading-[1.7] tracking-base text-white",
  description:
    "mt-[14px] px-[10px] pb-[20px] text-sm leading-main tracking-base text-white-70",
  imageWrapper: "relative h-[241px] md:h-[206px]",
  image: "w-full h-full object-cover md:object-contain rounded-small",
};

const LoyaltyCard = ({ name, description, imagePath }: LoyaltyCardProps) => {
  return (
    <BaseCard wrapperClass={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image
          className={cn(styles.image, "md:hidden")}
          src={imagePath.mobile}
          alt={name}
          fill
          sizes="100vw"
        />
        <Image
          className={cn(styles.image, "hidden md:block lg:hidden")}
          src={imagePath.tablet}
          alt={name}
          fill
          sizes="100vw"
        />
        <Image
          className={cn(styles.image, "hidden lg:block")}
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
