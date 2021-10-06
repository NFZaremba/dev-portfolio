import { Img } from "../../shared/types";

export interface ILink {
  site: string;
  url: string;
  icon: string;
}

export interface IProject {
  id: string;
  title: string;
  techStack: Array<string>;
  image: Img;
  preview?: string;
  description?: string;
  links: ILink[];
}
