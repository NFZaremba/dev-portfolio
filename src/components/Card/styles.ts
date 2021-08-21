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
      font-size: 1rem;
      padding: 1rem;
    }
  }

  @media (max-width: 420px) {
    button {
      font-size: 1rem;
      padding: 1rem;
    }
  }
`;

export const Container = styled(motion.div)<{ color: string; image: Img }>`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  background-size: cover;
  background-image: url(${(props) => props.image.src});
  border-radius: 1rem;
  height: 90%;
  width: 100%;
  border: solid 2px #c1b;
`;

export const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  padding: 1.5em;
  border-radius: 1rem;
  background: linear-gradient(
    hsl(0 0% 0% / 0),
    hsl(20 0% 0% / 0.3) 20%,
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
