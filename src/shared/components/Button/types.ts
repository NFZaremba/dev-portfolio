import { HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

export type ButtonSizes = "small" | "large" | "full";

export interface IButtonProps extends HTMLMotionProps<any> {
  children: ReactNode;
  classes?: string;
  size?: ButtonSizes;
  color?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
