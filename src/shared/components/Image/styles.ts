import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
  border-radius: 1rem;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: hsl(233deg 79% 55%);
    z-index: -1;
    mix-blend-mode: soft-light;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -2;
    background: hsl(291deg 100% 50%);
    mix-blend-mode: overlay;
  }
`;

export const ImageFrame = styled(motion.img)`
  position: absolute;
  z-index: -3;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
