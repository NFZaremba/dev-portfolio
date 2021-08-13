import { Img } from "../../shared/types";
import { IBaseComponentPropsWithMotion } from "../types";

export type ICardContainerProps = IBaseComponentPropsWithMotion;

export interface ICardProps extends ICardContainerProps {
  image: Img;
  isHovered?: boolean;
  color?: string;
}

export interface ICardContentProps extends Omit<ICardProps, "image"> {}

export interface ICardHeaderProps
  extends Omit<ICardProps, "image" | "isSelected"> {}

export interface ICardBodyProps
  extends Omit<ICardProps, "image" | "isSelected"> {}
