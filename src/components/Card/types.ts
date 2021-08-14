import { IBaseComponentPropsWithMotion } from "../types";

export type ICardContainerProps = IBaseComponentPropsWithMotion;

export interface ICardProps extends ICardContainerProps {
  isHovered?: boolean;
  color: string;
}

export interface ICardContentProps extends ICardContainerProps {}

export interface ICardHeaderProps extends ICardContainerProps {}

export interface ICardBodyProps extends ICardContainerProps {}
