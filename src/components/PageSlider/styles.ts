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
  /* width: 60%;
  height: 75%; */
  width: 53.125%;
  height: 74.81%;
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
    h3,
    a {
      font-size: 3rem;
    }
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }

  @media (max-width: 800px) {
    margin-left: 5%;
    h3,
    a {
      font-size: 2rem;
    }
  }

  @media (max-width: 420px) {
    top: 65%;
    h2 {
      font-size: 3rem;
    }
    h3,
    a {
      font-size: 2rem;
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
  margin-bottom: 1rem;
  font-weight: normal;
  text-shadow: 2px 3px 16px rgb(0 0 0);
  background: linear-gradient(hsl(0deg 0% 77%), hsl(206, 4%, 8%));
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
