import { IBaseComponentPropsWithMotion } from "../../types";

export interface IPageSliderProps extends IBaseComponentPropsWithMotion {
  colors?: string;
  bgColor?: string;
  gradient?: string;
}

export interface IPageSliderLeftProps extends IPageSliderProps {
  isOpen?: boolean;
}

export interface IPageSliderComp
  extends React.ForwardRefExoticComponent<
    IPageSliderProps & React.RefAttributes<HTMLDivElement>
  > {
  Title: React.FC<IPageSliderProps>;
  Header: React.FC<IPageSliderProps>;
  SubHeader: React.FC<IPageSliderProps>;
  Content: React.FC<IPageSliderProps>;
  Left: React.FC<IPageSliderLeftProps>;
  Right: React.FC<IPageSliderProps>;
}
