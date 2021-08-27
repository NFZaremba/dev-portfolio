import { motion } from "framer-motion";
import styled from "styled-components";

export const ProfileContainer = styled(motion.div)`
  position: "relative";
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  /* background: linear-gradient(135deg, #70f, #40f); */
  border: 1px solid #40f;
  border-radius: 1rem;
`;

// export const IconContainer = styled(motion.div)`
//   position: relative;
//   width: 15rem;
//   height: 15rem;
//   z-index: 999;
//   margin: 0;

//   scale: 0;
//   list-style: none;
//   background: rgba(255, 255, 255, 0.2);
//   border-radius: 50%;
// `;

export const Icon = styled(motion.li)`
  position: absolute;
  background: #fff;
  list-style: none;
  z-index: 1;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  cursor: pointer;

  .outline {
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    border: 10px solid white;
    border-radius: 50%;
  }
`;

export const IconList = styled(motion.ul)`
  position: relative;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%; */
  height: 100%;
  /* padding: 4rem; */
  margin: 0;
  /* display: grid; */
  /* grid-gap: 3.5rem;
  grid-template-columns: 2fr 1fr 2fr;
  grid-template-rows: repeat(2, 1fr); */

  /* .layout__item:first-child {
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
    grid-gap: 2rem;
  } */
`;

// export const Card = styled(motion.li)`
//   position: relative;
//   /* overflow: hidden; */
//   background: #fff;
//   box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1),
//     0 10px min(calc(1rem * (15 / (20 + 0.167 * 0))), 15px) 0 rgba(0, 0, 0, 0.06);
//   cursor: pointer;
//   will-change: transform;
//   border-radius: 1rem;
//   list-style: none;
// `;

// export const CardOverlay = styled(motion.div)<{ header: string }>`
//   position: relative;
//   z-index: 0;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   border-radius: 1rem;
//   background: rgb(110 0 255 / 49%);

//   &:after {
//     content: ${(props) => props.header};
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     font-size: 2.5rem;
//     color: #fff;
//   }
// `;

export const ModalContainer = styled(motion.div)`
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

export const Modal = styled(motion.div)`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: 999;
  flex: 1 1 auto;
  background: #fff;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1),
    0 10px min(calc(1rem * (15 / (20 + 0.167 * 0))), 15px) 0 rgba(0, 0, 0, 0.06);
  pointer-events: all;
  will-change: transform;
  padding: 2rem;
  border-radius: 1rem;
`;

export const ModalOverlay = styled(motion.div)`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background: #000;
`;

export const ProfileIcon = styled(motion.div)<{ image: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  border-radius: 50%;
`;
