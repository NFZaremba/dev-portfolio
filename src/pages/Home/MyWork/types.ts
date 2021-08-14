import { Img } from "../../../shared/types";

export interface IProject {
  id: string;
  themeColor: string;
  title: string;
  techStack: Array<string>;
  image: Img;
  secondImg?: Img;
  thirdImg?: Img;
  preview?: string;
  description?: string;
}
