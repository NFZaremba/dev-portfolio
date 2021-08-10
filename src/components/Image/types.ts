import { HTMLMotionProps } from "framer-motion";

export interface IImageProps extends HTMLMotionProps<any> {
  src: string;
  alt: string;
  classes?: string;
}
