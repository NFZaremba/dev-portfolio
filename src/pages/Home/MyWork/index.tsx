import { PageSlider, Card, Button } from "../../../components";
import Work from "./Work";
import {
  fade,
  fullpageAnimation,
  photoAnim,
  titleAnim,
} from "../../../shared/animation";
import { IProject } from "./types";
import { useScroll } from "../../../hooks";
import { useHistory } from "react-router-dom";
import { Row } from "../../../shared/Styles";

import athlete from "../../../assets/img/athlete-small.png";
import theracer from "../../../assets/img/theracer-small.png";

// TODO: change to include personal projects
export const projects: IProject[] = [
  {
    id: "athlete",
    title: "The Athlete",
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
  const history = useHistory();

  return (
    <PageSlider
      ref={ref}
      variants={fullpageAnimation}
      initial="hidden"
      animate={controls}
    >
      <PageSlider.Title>
        <PageSlider.Header variants={titleAnim}>Projects</PageSlider.Header>
        <PageSlider.Text variants={fade}>Most recent work</PageSlider.Text>
      </PageSlider.Title>
      <PageSlider.Content
        animate={controls}
        initial="hidden"
        variants={photoAnim}
      >
        <Row>
          {projects?.map(({ title, image, id, preview }) => (
            <Card id={id} image={image}>
              <Card.Header>{title}</Card.Header>
              <Card.Body>{preview}</Card.Body>
              <Button onClick={() => history.push(`work/${id}`)}>
                Learn more
              </Button>
            </Card>
          ))}
        </Row>
      </PageSlider.Content>
      {/* <WorkSection
        variants={pageAnimation}
        layout="position"
        initial="hidden"
        animate="show"
        exit="exit"
        data-testid="mywork-section"
      >
        {projects?.map(({ title, mainImg, id, techStack }) => (
          <Work title={title} mainImg={mainImg} id={id} techStack={techStack} />
        ))}
      </WorkSection> */}
    </PageSlider>
  );
};

export default MyWork;
