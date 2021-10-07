export interface ILink {
  site: string;
  url: string;
  icon: string;
}

export interface IProject {
  id: string;
  title: string;
  stackIcon: React.ReactElement;
  image: string;
  preview?: string;
  description?: string;
  links: ILink[];
}
