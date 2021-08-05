import classnames from "classnames";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Divider } from "../../shared/Styles";
import { Img } from "../../shared/types";
import { IBaseComponentPropsWithMotion } from "../types";

interface ICardProps extends IBaseComponentPropsWithMotion {
  image: Img;
}

interface ICardHeaderProps extends Omit<ICardProps, "image"> {}

interface ICardBodyProps extends Omit<ICardProps, "image"> {}

const StyledCard = styled(motion.div)<{ image: Img }>`
  padding: 10rem;
  background-image: url(${(props) => props.image.src});
  background-size: cover;
  padding: 15rem 0 0;
  min-width: 500px;
  box-shadow: 0 80px 140px -40px rgb(0 0 0 / 60%);
  border-radius: 1rem;
  overflow: hidden;

  /* &:hover {
    transform: scale(1.02);
  } */

  .card__content {
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
    /* transform: translateY(65%); */
  }

  .card__header {
    font-size: 3em;
  }

  .card__body {
    padding-bottom: 3em;
  }
`;

const hoverAnim = {
  hidden: {
    y: "65%",
  },
  show: {
    y: 0,
    transition: { duration: 0.25 },
  },
};

const Card = ({
  children,
  classes,
  image,
  ...props
}: ICardProps): JSX.Element => {
  return (
    <StyledCard
      {...props}
      whileHover="show"
      initial="hidden"
      image={image}
      className={classnames("card", classes)}
    >
      <motion.div variants={hoverAnim} className="card__content">
        {children}
      </motion.div>
    </StyledCard>
  );
};

Card.Header = ({ children, classes, ...props }: ICardHeaderProps) => {
  return (
    <>
      <motion.h2 {...props} className={classnames("card__header", classes)}>
        {children}
      </motion.h2>
      <Divider />
    </>
  );
};

Card.Body = ({ children, classes, ...props }: ICardBodyProps) => {
  return (
    <motion.div {...props} className={classnames("card__body", classes)}>
      {children}
    </motion.div>
  );
};

export default Card;
