import athlete from "../../../img/athlete-small.png";
import theracer from "../../../img/theracer-small.png";
import goodtimes from "../../../img/goodtimes-small.png";

// TODO: change to include personal projects

export interface IProject {
  title: string;
  img: string;
  path: string;
  alt: string;
}

export const projects = [
  {
    title: "The Athlete",
    img: athlete,
    path: "/",
    alt: "athlete",
  },
  {
    title: "The Racer",
    img: theracer,
    path: "/",
    alt: "racer",
  },
  {
    title: "Good Times",
    img: goodtimes,
    path: "/",
    alt: "good-times",
  },
];
