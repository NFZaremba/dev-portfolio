import classnames from "classnames";
import { AnimateSharedLayout } from "framer-motion";
import {
  StyledBody,
  StyledCard,
  StyledCardContainer,
  StyledContent,
  StyledHeader,
} from "./styles";
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
  image,
  isHovered,
  color,
  ...props
}: ICardProps): JSX.Element => {
  return (
    <StyledCard
      {...props}
      className={classnames("card", classes)}
      // image={image}
    >
      {children}
    </StyledCard>
  );
};

const Content = ({ children, classes, ...props }: ICardContentProps) => {
  return (
    <StyledContent {...props} className={classnames("card__content", classes)}>
      {children}
    </StyledContent>
  );
};

const Header = ({ children, classes, ...props }: ICardHeaderProps) => {
  return (
    <StyledHeader {...props} className={classnames("card__header", classes)}>
      {children}
    </StyledHeader>
  );
};

const Body = ({ children, classes, ...props }: ICardBodyProps) => {
  return (
    <StyledBody {...props} className={classnames("card__body", classes)}>
      {children}
    </StyledBody>
  );
};

const Container = ({ children, classes, ...props }: ICardContainerProps) => {
  return (
    <AnimateSharedLayout>
      <StyledCardContainer
        {...props}
        className={classnames("card__Container", classes)}
      >
        {children}
      </StyledCardContainer>
    </AnimateSharedLayout>
  );
};

Card.Content = Content;
Card.Container = Container;
Card.Header = Header;
Card.Body = Body;

export default Card;
