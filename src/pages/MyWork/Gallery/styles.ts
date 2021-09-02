import { motion } from "framer-motion";
import styled from "styled-components";

//* Styles
export const Container = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`;

export const Controls = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  left: 50%;
  margin: auto;
  transform: translate(-50%, -50%);
  bottom: -18px;

  /* @media (max-width: 800px) {
    bottom: -18px;
  } */

  @media (max-width: 420px) {
    bottom: -25px;
  }
`;

export const Indicator = styled(motion.div)`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #c1b;
  flex: 1;
  margin: 0.5rem;
  opacity: 0.3;
`;

export const Prev = styled(motion.div)`
  display: flex;
  cursor: pointer;
  margin: 0.5rem;
  flex: 1;
  &:hover {
    background: hsl(0deg 0% 29% / 21%);
    box-shadow: 0 0px 15px -6px rgb(255 255 255 / 40%);
    transition: 0.4s;
  }
  i {
    color: #fff;
    font-size: 2.1rem;
  }
`;

export const Next = styled(Prev)``;

export const Image = styled(motion.div)<{ image: string }>`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  background-size: cover;
  background-image: url(${(props) => props.image});
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
  padding-bottom: 1rem;

  @media (max-width: 800px) {
    font-size: 2em;
  }
`;

export const Preview = styled(motion.p)`
  padding-bottom: 3em;
`;

export const ExternalLink = styled(motion.a)`
  display: flex;
  margin-right: 2rem;
  &:hover {
    background: hsl(0deg 0% 29% / 21%);
    box-shadow: 0 0px 15px -6px rgb(255 255 255 / 40%);
    transition: 0.4s;
  }
`;
