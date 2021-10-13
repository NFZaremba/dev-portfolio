import { HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

export interface IBaseComponentProps {
  children?: ReactNode;
  classes?: string;
}

export type IBaseComponentPropsWithMotion = IBaseComponentProps &
  HTMLMotionProps<any>;

export interface Img {
  src: string;
  alt: string;
}

export type ISectionTitle = { [key: string]: string };
