import { IBaseComponentPropsWithMotion } from "../../shared/types";

export interface IDividerProps
  extends Omit<IBaseComponentPropsWithMotion, "children"> {
  color?: string;
  width?: number;
}
