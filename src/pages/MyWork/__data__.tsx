import spotifyImg from "../../assets/img/spotify-visualization-app.png";
import customReactImg from "../../assets/img/custom-react-query.png";
import TypeScriptIcon from "../../shared/icons/TypeScriptIcon";
import ReactIcon from "../../shared/icons/ReactIcon";

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

export const projects: IProject[] = [
  {
    id: "spotify-app",
    title: "Spotify Visualization App",
    stackIcon: <TypeScriptIcon />,
    image: spotifyImg,
    description:
      "A web app that lets users visualize their personalized Spotify data built with Node.js, Express, React, Styled Components, and the Spotify API.",
    links: [
      {
        site: "Github",
        url: "https://github.com/NFZaremba/spotify-app",
        icon: "ri-github-line",
      },
      {
        site: "Site",
        url: "https://spotify-visualization-app.herokuapp.com/",
        icon: "ri-global-line",
      },
    ],
  },
  {
    id: "racer",
    title: "React Query Table",
    stackIcon: <ReactIcon />,
    image: customReactImg,
    description:
      "Custom Table built from scratch utilizing React-Query with the compound component pattern. Including custom hooks profividing Search, Sorting, and filtering functionality.",
    links: [
      {
        site: "Github",
        url: "https://github.com/NFZaremba/react-query-table",
        icon: "ri-github-line",
      },
      { site: "Site", url: "", icon: "ri-global-line" },
    ],
  },
];
