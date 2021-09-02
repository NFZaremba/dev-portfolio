import { motion } from "framer-motion";
import styled from "styled-components";

export const ProfileContainer = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  /* background: linear-gradient(135deg, #70f, #40f); */
  /* border: 1px solid #40f; */
  border-radius: 1rem;
`;

export const ProfileIcon = styled(motion.div)<{ image: string }>`
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

export const CardContainer = styled(motion.li)`
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

export const CardContent = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  /* height: 420px;
  width: 100vw; */
  width: 100%;
  height: 100%;
  background: linear-gradient(100deg, #72f, #c1b);
`;

export const CardTitle = styled(motion.div)`
  position: absolute;
  top: 50%;
  /* left: 50%; */
  /* width: 100%; */
  h3 {
    z-index: 999;
  }

  &.open {
    top: 10%;
  }
`;

export const CardText = styled(motion.div)`
  display: flex;
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

export const CardExpandedContainer = styled(motion.div)`
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

export const CardExpanded = styled(motion.div)`
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
`;

export const Overlay = styled(motion.div)`
  position: absolute;
  /* z-index: 0; */
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
