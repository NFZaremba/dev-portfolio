import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.section)`
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const Content = styled(motion.div)`
  position: relative;
  width: 53.125%;
  height: 70%;
  overflow: hidden;
  margin: 0px 5% 0 auto;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 1000px) {
    margin: 0px 5% 0 auto;
    height: 55%;
  }

  @media (max-width: 800px) {
    margin: 0px 10% 0;
    height: 50%;
    width: 100%;
    bottom: 10%;
  }

  @media (max-width: 600px) {
    height: 50%;
  }

  @media (max-width: 420px) {
    height: 40%;
  }
`;

export const Title = styled(motion.div)`
  position: absolute;
  z-index: 999;
  overflow: hidden;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  margin-left: 10%;

  @media (max-width: 1300px) {
    padding: 0;
    h2 {
      font-size: 5rem;
    }
    h3 {
      font-size: 2rem;
    }
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }

  @media (max-width: 800px) {
    top: 80%;
    h2 {
      font-size: 5rem;
    }
    h3 {
      font-size: 2rem;
    }
    button {
      margin: 0 0 5rem 0;
    }
  }

  @media (max-width: 420px) {
    top: 70%;
    h2 {
      font-size: 3rem;
    }
  }
`;

export const Header = styled(motion.h2)`
  font-size: 8rem;
  line-height: 1;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
  font-weight: normal;
  background: linear-gradient(145deg, #72f, #c1b);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  z-index: 999;
`;

export const SubHeader = styled(motion.h3)`
  padding: 0 2rem 3rem 2rem;
  font-size: 3rem;
  line-height: 150%;
`;
