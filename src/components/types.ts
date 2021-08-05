import { HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

export interface IBaseComponentProps {
  children?: ReactNode;
  classes?: string;
}

export type IBaseComponentPropsWithMotion = IBaseComponentProps &
  HTMLMotionProps<any>;
