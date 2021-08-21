import { AnimateSharedLayout } from "framer-motion";
import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Card, Divider } from "../../components";
import { cardAnim, lineAnim, springType } from "../../shared/animation";
import { IProject } from "./types";

export interface ICardListProps {
  projects: IProject[];
  inView: boolean;
  history: RouteComponentProps["history"];
}

const CardList = ({ projects, inView, history }: ICardListProps) => {
  const [hovered, setHovered] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setHovered(projects[0].id);
    }, 3000);
  }, []);

  return (
    <AnimateSharedLayout>
      <Card.Group>
        {projects?.map(({ title, image, id, preview, themeColor }) => {
          const isHovered = hovered === id;

          return (
            <Card
              key={id}
              id={id}
              color={themeColor}
              isHovered={isHovered}
              onMouseOver={() => setHovered(id)}
              animate={isHovered ? "show" : "hidden"}
              style={{ zIndex: isHovered ? 1 : 0 }}
              initial="hidden"
              variants={cardAnim}
              image={image}
            >
              {/* <Card.Image
                src={image.src}
                alt={image.alt}
                classes={setImageAnimClass(inView)}
              /> */}
              {isHovered && (
                <Card.Content
                  classes="outline"
                  layoutId="outline"
                  // animate={{ borderColor: "#000" }}
                  transition={springType}
                >
                  <Card.Header>{title}</Card.Header>
                  <Divider
                    width={100}
                    color={themeColor}
                    variants={lineAnim}
                    initial="hidden"
                  />
                  <Card.Body>{preview}</Card.Body>
                  <Card.Button
                    color={themeColor}
                    onClick={() => history.push(`work/${id}`)}
                  >
                    🠚
                  </Card.Button>
                </Card.Content>
              )}
            </Card>
          );
        })}
      </Card.Group>
    </AnimateSharedLayout>
  );
};

export default CardList;
