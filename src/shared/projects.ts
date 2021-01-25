import athlete from "../assets/img/athlete-small.png";
import theracer from "../assets/img/theracer-small.png";
import goodtimes from "../assets/img/goodtimes-small.png";

// TODO: change to include personal projects

interface Img {
  src: string;
  alt: string;
}

export interface IProject {
  id: string;
  title: string;
  subTitle: string;
  techStack: Array<string>;
  mainImg: Img;
  secondaryImgs?: Array<Img>;
  description?: string;
}

export const projects: IProject[] = [
  {
    id: "athlete",
    title: "The Athlete",
    subTitle:
      "This is a subtitle that will describe the project. Sweeeeeeeetness.",
    techStack: [
      "react",
      "typescript",
      "styled components",
      "jest/react-testing-library",
      "accessibility",
      "webpack",
    ],
    mainImg: {
      src: athlete,
      alt: "athlete",
    },
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: "racer",
    title: "The Racer",
    subTitle:
      "This is a subtitle that will describe the project. Sweeeeeeeetness.",
    techStack: [
      "react",
      "typescript",
      "styled components",
      "jest/react-testing-library",
      "accessibility",
      "webpack",
    ],
    mainImg: {
      src: theracer,
      alt: "racer",
    },
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: "goodtimes",
    title: "Good Times",
    subTitle:
      "This is a subtitle that will describe the project. Sweeeeeeeetness.",
    techStack: [
      "react",
      "typescript",
      "styled components",
      "jest/react-testing-library",
      "accessibility",
      "webpack",
    ],
    mainImg: {
      src: goodtimes,
      alt: "good-times",
    },
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];
