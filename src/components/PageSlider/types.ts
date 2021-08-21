import { IBaseComponentPropsWithMotion } from "../../shared/types";

export type IPageSliderProps = IBaseComponentPropsWithMotion;

export interface IPageSliderContentProps extends IPageSliderProps {}

export interface IPageSliderComp
  extends React.ForwardRefExoticComponent<
    IPageSliderProps & React.RefAttributes<HTMLDivElement>
  > {
  Title: React.FC<IPageSliderProps>;
  Header: React.FC<IPageSliderProps>;
  SubHeader: React.FC<IPageSliderProps>;
  Content: React.FC<IPageSliderContentProps>;
}
