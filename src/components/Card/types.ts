import { IBaseComponentPropsWithMotion, Img } from "../../shared/types";

export type ICardContainerProps = IBaseComponentPropsWithMotion;

export interface ICardProps extends ICardContainerProps {
  isHovered?: boolean;
  color?: string;
  image: Img;
}

export interface ICardContentProps extends ICardContainerProps {}

export interface ICardHeaderProps extends ICardContainerProps {}

export interface ICardBodyProps extends ICardContainerProps {}
