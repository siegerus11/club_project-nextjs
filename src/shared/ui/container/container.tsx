import { PropsWithChildren } from "react";
import { cn } from "@/shared/lib";

type ContainerProps = PropsWithChildren<{
  containerClass?: string;
}>;

const Container = ({ children, containerClass }: ContainerProps) => {
  return <div className={cn("container", containerClass)}>{children}</div>;
};

export default Container;
