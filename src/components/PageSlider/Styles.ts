import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled(motion.section)`
  height: 100vh;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  /* padding: 5rem 10rem; */
  color: white;

  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const Title = styled(motion.div)`
  position: absolute;
  z-index: 999;
  overflow: hidden;
  top: 20%;
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

export const Header = styled(motion.h2)`
  font-size: 8rem;
  line-height: 1;
  letter-spacing: 0.1em;
  margin-bottom: 1.6rem;
  font-weight: normal;
  text-shadow: 11px 8px 16px rgb(0 0 0);
`;

export const Content = styled(motion.div)`
  /* flex: 2; */
  width: 60%;
  height: 70vh;
  overflow: hidden;
  margin: 0px 8% 0 auto;
  box-shadow: 0 80px 140px -40px rgb(0 0 0 / 60%);
`;

export const Text = styled(motion.p)`
  padding-bottom: 3rem;
  color: #ccc;
  font-size: 1.4rem;
  line-height: 150%;
`;

export const Image = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
