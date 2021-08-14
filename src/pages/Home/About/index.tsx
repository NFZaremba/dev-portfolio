import { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { PageSlider } from "../../../components";
import CardList from "../CardList";
import {
  fullpageAnimation,
  contentAnim,
  titleAnim,
} from "../../../shared/animation";
import athlete from "../../../assets/img/athlete2.png";
import theracer from "../../../assets/img/the-racer2.jpg";
import useScroll from "../../../hooks/useScroll";

// TODO: change to include personal projects
export const projects = [
  {
    id: "aboutme",
    title: "About Me",
    themeColor: "#00ff00",
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
    id: "skills",
    title: "Skills",
    themeColor: "#ff0000",
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

const About = () => {
  const [ref, controls, inView] = useScroll();
  const history = useHistory();

  return (
    <PageSlider
      ref={ref}
      variants={fullpageAnimation}
      initial="hidden"
      animate={controls}
    >
      <PageSlider.Title>
        <PageSlider.Header variants={titleAnim}>About Me</PageSlider.Header>
        <PageSlider.Text variants={titleAnim}>
          Software Developer
        </PageSlider.Text>
      </PageSlider.Title>
      <PageSlider.Content
        animate={controls}
        initial="hidden"
        variants={contentAnim}
      >
        <CardList history={history} projects={projects} inView={inView} />
      </PageSlider.Content>
    </PageSlider>
  );
};

export default About;
