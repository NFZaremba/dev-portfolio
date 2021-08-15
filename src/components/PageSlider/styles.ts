import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.section)`
  height: 100vh;
  display: flex;
  align-items: center;

  /* @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  } */
`;

export const Content = styled(motion.div)`
  position: relative;
  width: 60%;
  height: 75%;
  overflow: hidden;
  margin: 0px 8% 0 auto;
  align-items: center;
  justify-content: space-evenly;
  padding: 2em;

  @media (max-width: 800px) {
    margin: 0px 5% 0 auto;
  }

  @media (max-width: 420px) {
    width: 100%;
    height: 55%;
    margin: 0;
    bottom: 10%;
  }
`;

export const Title = styled(motion.div)`
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

  @media (max-width: 800px) {
    margin-left: 5%;
  }

  @media (max-width: 420px) {
    top: 65%;
    h2 {
      font-size: 3rem;
    }
    button {
      margin: 0 0 5rem 0;
    }
  }
`;

export const Header = styled(motion.h2)`
  font-size: 8rem;
  line-height: 1;
  letter-spacing: 0.1em;
  margin-bottom: 1.6rem;
  font-weight: normal;
  text-shadow: 2px 3px 16px rgb(0 0 0);
`;

export const Text = styled(motion.p)`
  padding-bottom: 3rem;
  font-size: 1.4rem;
  line-height: 150%;
`;
