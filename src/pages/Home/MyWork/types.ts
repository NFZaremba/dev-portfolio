interface Img {
  src: string;
  alt: string;
}

export interface IProject {
  id: string;
  title: string;
  techStack: Array<string>;
  mainImg: Img;
  secondaryImgs?: Array<Img>;
  description?: string;
}
