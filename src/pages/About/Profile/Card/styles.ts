import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.li)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #000;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1),
    0 10px min(calc(1rem * (15 / (20 + 0.167 * 0))), 15px) 0 rgba(0, 0, 0, 0.06);
  cursor: pointer;
  border-radius: 0.6rem;
  list-style: none;
`;

export const Background = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: linear-gradient(100deg, #72f, #c1b);
`;

export const Title = styled(motion.div)`
  position: absolute;
  top: 50%;
  h3 {
    z-index: 999;
  }

  &.open {
    top: 10%;
  }
`;

export const Text = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 7rem 2rem 3rem;
  background: #000;
  max-width: 700px;
  color: #fff;
  height: 100%;
  width: 100%;

  p {
    width: clamp(45ch, 50%, 75ch);
  }
`;

export const ExpandedContainer = styled(motion.div)`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 8rem 13rem;
  place-content: center;
  place-items: center;
  pointer-events: none;

  @media (max-width: 1200px) {
    padding: 9rem 12rem;
  }

  @media (max-width: 1000px) {
    padding: 6rem 9rem;
  }

  @media (max-width: 600px) {
    padding: 5rem;
  }

  @media (max-width: 420px) {
    padding: 3rem;
  }
`;

export const ExpandedCard = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: 999;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1),
    0 10px min(calc(1rem * (15 / (20 + 0.167 * 0))), 15px) 0 rgba(0, 0, 0, 0.06);
  pointer-events: all;
  will-change: transform;
  border-radius: 1.2rem;

  &.open {
    .expanded-card__background {
      height: 22%;
    }
  }
`;

export const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background: #0f0f10;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  white-space: pre-wrap;

  i {
    margin-right: 1rem;
    color: #c1b;
  }
`;
