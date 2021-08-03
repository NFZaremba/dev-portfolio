import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Section = styled(motion.section)`
  height: 100vh;
  /* display: flex; */
  /* align-items: center;
  justify-content: center; */
  padding: 5rem 10rem;
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
  /* width: 50%; */

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
  text-shadow: 0 10px 30px rgb(2 11 22 / 50%);
`;

export const Content = styled(motion.div)`
  /* flex: 2; */
  width: 60%;
  height: 70vh;
  overflow: hidden;
  /* z-index: 2; */
  margin-left: 40rem;
  box-shadow: 0 80px 140px -40px rgb(0 0 0 / 60%);
`;

export const Text = styled(motion.p)`
  padding: 3rem 0rem;
  color: #ccc;
  font-size: 1.4rem;
  line-height: 150%;
`;

export const Image = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
