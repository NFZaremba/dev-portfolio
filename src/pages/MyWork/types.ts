import { Img } from "../../shared/types";

export interface IProject {
  id: string;
  title: string;
  techStack: Array<string>;
  image: Img;
  preview?: string;
  description?: string;
  githubLink: string;
  websiteLink: string;
}
