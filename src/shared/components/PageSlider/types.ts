import { IBaseComponentPropsWithMotion } from "../../types";

export type IPageSliderProps = IBaseComponentPropsWithMotion;

export interface IPageSliderContentProps extends IPageSliderProps {}

export interface IPageSliderContentLeft extends IPageSliderProps {}

export interface IPageSliderContentRight extends IPageSliderProps {}

export interface IPageSliderComp
  extends React.ForwardRefExoticComponent<
    IPageSliderProps & React.RefAttributes<HTMLDivElement>
  > {
  Title: React.FC<IPageSliderProps>;
  Header: React.FC<IPageSliderProps>;
  SubHeader: React.FC<IPageSliderProps>;
  Content: React.FC<IPageSliderContentProps>;
  Left: React.FC<IPageSliderContentLeft>;
  Right: React.FC<IPageSliderContentRight>;
}
