import { motion } from "framer-motion";
import styled from "styled-components";
import { Img } from "../../shared/types";

export const StyledCardContainer = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  /* padding: 1rem 0; */
`;

export const StyledCard = styled(motion.div)<{ image: Img }>`
  position: relative;
  background-image: url(${(props) => props.image.src});
  background-size: cover;
  min-width: 500px;
  box-shadow: 40px 35px 34px -33px rgb(0 0 0 / 70%);
  border-radius: 1rem;
  /* z-index: 1; */

  .outline {
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    border: 5px solid white;
    border-radius: 1em;
    margin: 1em;
    z-index: 9999;
  }
`;

export const StyledContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* height: 100%; */
  padding: 1.5em;
  background: linear-gradient(
    hsl(0 0% 0% / 0),
    hsl(20 0% 0% / 0.3) 20%,
    hsl(0 0% 0% / 1)
  );
`;

export const StyledHeader = styled(motion.h2)`
  font-size: 3em;
`;

export const StyledBody = styled(motion.div)`
  padding-bottom: 3em;
`;
