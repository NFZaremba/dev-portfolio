import { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { Button, Card, Divider, Image } from "../../../components";
import { cardAnim, lineAnim, springType } from "../../../shared/animation";
import { setImageAnimClass } from "../../../shared/helpers";
import { IProject } from "./types";

export interface ICardListProps {
  projects: IProject[];
  inView: boolean;
}

const CardList = ({ projects, inView }: ICardListProps) => {
  const [hovered, setHovered] = useState(projects[0].id);
  const history = useHistory();
  const match = useRouteMatch("/about/:id");

  return (
    <Card.Container>
      {projects?.map(({ title, image, id, preview, themeColor }) => {
        const isHovered = hovered === id;

        return (
          <Card
            key={id}
            id={id}
            color={themeColor}
            isHovered={isHovered}
            image={image}
            onMouseOver={() => setHovered(id)}
            animate={isHovered ? "show" : "hidden"}
            style={{ zIndex: isHovered ? 1 : 0 }}
            initial="hidden"
            variants={cardAnim}
          >
            <Image
              src={image.src}
              alt={image.alt}
              classes={setImageAnimClass(inView)}
            />
            {isHovered && (
              <Card.Content
                classes="outline"
                layoutId="outline"
                animate={{ borderColor: themeColor }}
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
                <Button
                  color={themeColor}
                  onClick={() => history.push(`work/${id}`)}
                >
                  Learn more
                </Button>
              </Card.Content>
            )}
          </Card>
        );
      })}
    </Card.Container>
  );
};

export default CardList;
