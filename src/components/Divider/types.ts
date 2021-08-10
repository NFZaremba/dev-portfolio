import { IBaseComponentPropsWithMotion } from "../types";

export interface IDividerProps
  extends Omit<IBaseComponentPropsWithMotion, "children"> {
  color?: string;
  width?: number;
}
