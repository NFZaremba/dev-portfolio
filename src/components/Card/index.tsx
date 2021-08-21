import { motion } from "framer-motion";
import styled from "styled-components";
import classnames from "classnames";
import Button from "../Button";
import ImageFrame from "../Image";
import {
  ICardBodyProps,
  ICardContainerProps,
  ICardContentProps,
  ICardHeaderProps,
  ICardProps,
} from "./types";
import { Img } from "../../shared/types";

//* Styles
export const Group = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  height: 100%;

  @media (max-width: 800px) {
    flex-direction: column;
    button {
      font-size: 1rem;
      padding: 1rem;
    }
  }

  @media (max-width: 420px) {
    button {
      font-size: 1rem;
      padding: 1rem;
    }
  }
`;

export const Container = styled(motion.div)<{ image: Img }>`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  background-size: cover;
  background-image: url(${(props) => props.image.src});
  border-radius: 1rem;
  height: 90%;
  width: 100%;
  border: solid 2px #c1b;
`;

export const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  padding: 1.5em;
  border-radius: 1rem;
  background: linear-gradient(
    hsl(0 0% 0% / 0),
    hsl(20 0% 0% / 0.3) 20%,
    hsl(0 0% 0% / 1)
  );
`;

export const Header = styled(motion.h2)`
  font-size: 3em;

  @media (max-width: 800px) {
    font-size: 2em;
  }
`;

export const Body = styled(motion.p)`
  padding-bottom: 3em;
`;

/**
 * Card component
 *
 * @param children
 * @param classes
 * @param image
 * @returns
 */
const Card = ({
  children,
  classes,
  image,
  ...props
}: ICardProps): JSX.Element => {
  return (
    <Container image={image} {...props} className={classnames("card", classes)}>
      {children}
    </Container>
  );
};

const CardContent = ({ children, classes, ...props }: ICardContentProps) => {
  return (
    <Content {...props} className={classnames("card__content", classes)}>
      {children}
    </Content>
  );
};

const CardHeader = ({ children, classes, ...props }: ICardHeaderProps) => {
  return (
    <Header {...props} className={classnames("card__header", classes)}>
      {children}
    </Header>
  );
};

const CardBody = ({ children, classes, ...props }: ICardBodyProps) => {
  return (
    <Body {...props} className={classnames("card__body", classes)}>
      {children}
    </Body>
  );
};

const CardGroup = ({ children, classes, ...props }: ICardContainerProps) => {
  return (
    <Group {...props} className={classnames("card__Group", classes)}>
      {children}
    </Group>
  );
};

Card.Content = CardContent;
Card.Group = CardGroup;
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Image = ImageFrame;
Card.Button = Button;

export default Card;
