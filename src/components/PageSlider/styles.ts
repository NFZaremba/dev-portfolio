import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledPageSlider = styled(motion.section)`
  height: 100vh;
  display: flex;
  align-items: center;
  color: white;

  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const StyledTitle = styled(motion.div)`
  position: absolute;
  z-index: 999;
  overflow: hidden;
  top: 23%;
  margin-left: 10%;

  @media (max-width: 1300px) {
    padding: 0;
    h2 {
      font-size: 4rem;
    }
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const StyledHeader = styled(motion.h2)`
  font-size: 8rem;
  line-height: 1;
  letter-spacing: 0.1em;
  margin-bottom: 1.6rem;
  font-weight: normal;
  text-shadow: 2px 3px 16px rgb(0 0 0);
`;

export const StyledContent = styled(motion.div)`
  position: relative;
  width: 60%;
  height: 80vh;
  overflow: hidden;
  margin: 0px 8% 0 auto;
  align-items: center;
  justify-content: center;
  padding: 2em;
`;

export const StyledText = styled(motion.p)`
  padding-bottom: 3rem;
  color: #ccc;
  font-size: 1.4rem;
  line-height: 150%;
`;
