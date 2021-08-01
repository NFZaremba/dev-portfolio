import { PageTransition } from "../../../components";
import Work from "./Work";
import { WorkSection } from "./Styles";
import { pageAnimation } from "../../../shared/animation";
import { IProject } from "./types";

import athlete from "../../../assets/img/athlete-small.png";
import theracer from "../../../assets/img/theracer-small.png";

// TODO: change to include personal projects

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
];

const MyWork = () => {
  return (
    <WorkSection
      variants={pageAnimation}
      layout="position"
      initial="hidden"
      animate="show"
      exit="exit"
      data-testid="mywork-section"
    >
      <PageTransition />
      {projects?.map(({ title, mainImg, id, subTitle, techStack }) => (
        <Work
          title={title}
          mainImg={mainImg}
          id={id}
          subTitle={subTitle}
          techStack={techStack}
        />
      ))}
    </WorkSection>
  );
};

export default MyWork;
