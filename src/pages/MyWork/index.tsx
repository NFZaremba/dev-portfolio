import { PageSlider } from "../../components";
import {
  fullpageAnimation,
  contentAnim,
  titleAnim,
} from "../../shared/animation";
import { IProject } from "./types";
import athlete from "../../assets/img/athlete-small.png";
import theracer from "../../assets/img/theracer-small.png";
import useScroll from "../../hooks/useScroll";
import CardGallery from "./CardGallery";

// TODO: change to include personal projects
export const projects: IProject[] = [
  {
    id: "athlete",
    title: "The Athlete",
    themeColor: "#ff0055",
    techStack: [
      "react",
      "typescript",
      "styled components",
      "jest/react-testing-library",
      "accessibility",
      "webpack",
    ],
    image: {
      src: athlete,
      alt: "athlete",
    },
    preview: "This is a preview project",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: "racer",
    title: "The Racer",
    themeColor: "#0099ff",
    techStack: [
      "react",
      "typescript",
      "styled components",
      "jest/react-testing-library",
      "accessibility",
      "webpack",
    ],
    image: {
      src: theracer,
      alt: "racer",
    },
    preview: "This is a preview project",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

const MyWork = () => {
  const [ref, controls] = useScroll();

  return (
    <PageSlider
      ref={ref}
      variants={fullpageAnimation}
      initial="hidden"
      animate={controls}
    >
      <PageSlider.Title>
        <PageSlider.Header variants={titleAnim}>Projects</PageSlider.Header>
        <PageSlider.SubHeader variants={titleAnim}>
          Most recent work
        </PageSlider.SubHeader>
      </PageSlider.Title>
      <PageSlider.Content
        animate={controls}
        initial="hidden"
        variants={contentAnim}
      >
        {/* <CardList history={history} projects={projects} inView={inView} /> */}
        <CardGallery projects={projects} />
      </PageSlider.Content>
    </PageSlider>
  );
};

export default MyWork;
