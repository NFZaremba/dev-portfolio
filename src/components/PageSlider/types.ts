import { IBaseComponentPropsWithMotion } from "../types";

export type IPageSliderProps = IBaseComponentPropsWithMotion;

export interface IPageSliderContentProps extends IPageSliderProps {}

export interface IPageSliderComp
  extends React.ForwardRefExoticComponent<
    IPageSliderProps & React.RefAttributes<HTMLDivElement>
  > {
  Title: React.FC<IPageSliderProps>;
  Header: React.FC<IPageSliderProps>;
  Text: React.FC<IPageSliderProps>;
  Content: React.FC<IPageSliderContentProps>;
}
