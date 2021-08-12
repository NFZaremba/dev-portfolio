import { PageSlider, Card, Button, Divider } from "../../../components";
import {
  fullpageAnimation,
  lineAnim,
  contentAnim,
  titleAnim,
  cardAnim,
  springType,
} from "../../../shared/animation";
import { useScroll } from "../../../hooks";
import { useHistory } from "react-router-dom";

import athlete from "../../../assets/img/athlete-small.png";
import theracer from "../../../assets/img/theracer-small.png";
import { useState } from "react";

// TODO: change to include personal projects
export const projects = [
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

const Intro = () => {
  const [ref, controls, inView] = useScroll();
  const history = useHistory();
  const [selected, setSelected] = useState(projects[0].id);

  return (
    <PageSlider
      ref={ref}
      variants={fullpageAnimation}
      initial="hidden"
      animate={controls}
    >
      <PageSlider.Title>
        <PageSlider.Header variants={titleAnim}>About Me</PageSlider.Header>
      </PageSlider.Title>
      <PageSlider.Content
        animate={controls}
        initial="hidden"
        variants={contentAnim}
      >
        <Card.Container>
          {projects?.map(({ title, image, id, preview, themeColor }) => {
            const isSelected = selected === id;
            return (
              <Card
                key={id}
                id={id}
                color={themeColor}
                isSelected={isSelected}
                image={image}
                onMouseOver={() => setSelected(id)}
                animate={isSelected ? "show" : "hidden"}
                style={{ zIndex: isSelected ? 1 : 0 }}
                initial="hidden"
                variants={cardAnim}
              >
                {isSelected && (
                  <>
                    <Card.Content
                      classes="outline"
                      layoutId="outline"
                      animate={{ borderColor: themeColor }}
                      transition={springType}
                    >
                      <Card.Header>{title}</Card.Header>
                      <Divider color={themeColor} variants={lineAnim} />
                      <Card.Body>{preview}</Card.Body>
                      <Button
                        color={themeColor}
                        onClick={() => history.push(`work/${id}`)}
                      >
                        Learn more
                      </Button>
                    </Card.Content>
                  </>
                )}
              </Card>
            );
          })}
        </Card.Container>
      </PageSlider.Content>
    </PageSlider>
  );
};

export default Intro;
