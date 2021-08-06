import classnames from "classnames";
import { AnimateSharedLayout, motion } from "framer-motion";
import styled from "styled-components";
import { lineAnim } from "../../shared/animation";
import { Img } from "../../shared/types";
import { IBaseComponentPropsWithMotion } from "../types";

type ICardContainerProps = IBaseComponentPropsWithMotion;

interface ICardProps extends ICardContainerProps {
  image: Img;
  isSelected?: boolean;
  color?: string;
}

interface ICardContentProps extends Omit<ICardProps, "image"> {}

interface ICardHeaderProps extends Omit<ICardProps, "image" | "isSelected"> {}

interface ICardBodyProps extends Omit<ICardProps, "image" | "isSelected"> {}

const StyledCardContainer = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  /* padding: 1rem 0; */
`;

const StyledCard = styled(motion.div)<{ image: Img }>`
  position: relative;
  padding: 10rem;
  background-image: url(${(props) => props.image.src});
  background-size: cover;
  padding: 15rem 0 0;
  min-width: 500px;
  box-shadow: 40px 35px 34px -33px rgb(0 0 0 / 70%);
  border-radius: 1rem;
  /* overflow: hidden; */

  .outline {
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    border: 10px solid white;
    border-radius: 1em;
  }
`;

const StyledContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  padding: 1.5em;
  background: linear-gradient(
    hsl(0 0% 0% / 0),
    hsl(20 0% 0% / 0.3) 20%,
    hsl(0 0% 0% / 1)
  );
`;

const StyledHeader = styled(motion.h2)`
  font-size: 3em;
`;

const StyledBody = styled(motion.div)`
  padding-bottom: 3em;
`;

const Card = ({
  children,
  classes,
  image,
  isSelected,
  color,
  ...props
}: ICardProps): JSX.Element => {
  return (
    <StyledCard
      {...props}
      className={classnames("card", classes)}
      image={image}
    >
      {/* {isSelected && (
        <StyledContent
          layoutId="outline"
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="card__content"
        >
          {children}
        </StyledContent>
      )} */}
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
