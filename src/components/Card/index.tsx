import classnames from "classnames";
import Button from "../Button";
import ImageFrame from "../Image";
import { Body, Container, Content, Header, Group } from "./styles";
import {
  ICardBodyProps,
  ICardContainerProps,
  ICardContentProps,
  ICardHeaderProps,
  ICardProps,
} from "./types";

const Card = ({
  children,
  classes,
  isHovered,
  color,
  ...props
}: ICardProps): JSX.Element => {
  return (
    <Container {...props} className={classnames("card", classes)} color={color}>
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
    <Group {...props} className={classnames("card__Container", classes)}>
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
