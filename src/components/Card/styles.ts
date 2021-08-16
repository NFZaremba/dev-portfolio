import { motion } from "framer-motion";
import styled from "styled-components";
import { Img } from "../../shared/types";

export const Group = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  height: 100%;

  @media (max-width: 800px) {
    flex-direction: column;
    button {
      /* width: 50%; */
      font-size: 1rem;
      padding: 1rem;
    }
  }

  @media (max-width: 420px) {
    button {
      /* width: 50%; */
      font-size: 1rem;
      padding: 1rem;
    }
  }
`;

export const Container = styled(motion.div)<{ color: string; image: Img }>`
  position: relative;
  background-size: cover;
  /* min-width: 30rem; */
  background-image: url(${(props) => props.image.src});
  box-shadow: 40px 35px 34px -33px rgb(0 0 0 / 70%);
  border-radius: 1rem;
  margin: 1em;
  flex: 1;

  &:after {
    content: "";
    height: 100%;
    top: 0;
    left: 0;
    width: 100%;
    position: absolute;
    background-image: linear-gradient(
      135deg,
      #0100ec,
      ${(props) => props.color}
    );
    border-radius: 1rem;
    opacity: 0.4;
  }

  /* &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #0100ec, ${(props) => props.color});
    transform: translateY(20px) scale(0.9);
    filter: blur(25px);
  } */

  .outline {
    position: absolute;
    top: -1rem;
    left: -1rem;
    right: -1rem;
    bottom: -1rem;
    /* border: 2px solid white; */
    border-radius: 1em;
    margin: 1em;
    z-index: 9999;
  }
`;

export const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* height: 100%; */
  padding: 1.5em;
  background: linear-gradient(
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 65%,
    hsl(0 0% 0% / 1)
  );
`;

export const Header = styled(motion.h2)`
  font-size: 3em;

  @media (max-width: 800px) {
    font-size: 2em;
  }
`;

export const Body = styled(motion.p)`
  padding-bottom: 3em;
`;
