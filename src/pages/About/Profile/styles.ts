import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 1rem;
`;

export const Icon = styled(motion.div)<{ image: string }>`
  position: absolute;
  /* top: 50%;
  left: 50%; */
  /* transform: translate(-50%, -50%); */
  transform: scale(0);
  /* z-index: 1; */
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  border-radius: 0.6rem;

  &:after {
    content: "";
    position: absolute;
    border-radius: 0.6rem;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #70f, #40f);
    opacity: 0.4;
  }

  @media (max-width: 450px) {
    background-size: cover;
    /* object-fit: cover; */
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

export const Layout = styled(motion.div)`
  position: absolute;
  height: 100%;
  width: 100%;
  display: grid;
  grid-gap: 3.5rem;
  grid-template-columns: 2fr 1fr 2fr;
  grid-template-rows: repeat(2, 1fr);
  padding: 2rem;

  .layout__item:first-child {
    grid-area: 1/1/2/2;
  }

  .layout__item:nth-child(2) {
    grid-area: 1/2/2/4;
  }
  .layout__item:nth-child(3) {
    grid-area: 2/1/3/3;
  }
  .layout__item:nth-child(4) {
    grid-area: 2/3/3/4;
  }

  @media (max-width: 1000px) {
    padding: 4rem;
    grid-gap: 2rem;
  }

  @media (max-width: 600px) {
    padding: 3rem;
  }

  @media (max-width: 420px) {
    padding: 2rem;
    grid-gap: 1rem;
  }
`;
