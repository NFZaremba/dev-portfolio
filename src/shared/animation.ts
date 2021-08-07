import styled from "styled-components";
import { motion } from "framer-motion";
/**
 Propogation 
If a motion component has children, changes in variant will flow down through the component hierarchy. These changes in variant will flow down until a child component defines its own animate property.
 */

// Initial fullpage animation
export const fullpageAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.17,
      delayChildren: 0.06,
    },
  },
};

// Initial Page Animations
export const pageAnimation = {
  hidden: {
    opacity: 0,
    // y: 300,
  },
  show: {
    opacity: 1,
    // y: 0,
    transition: {
      duration: 1,
      // when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

// Component Animations
export const titleAnim = {
  hidden: {
    opacity: 0,
    x: -300,
    transition: {
      x: { stiffness: 1000 },
    },
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.75,
    },
  },
};

export const scrollFade = {
  hidden: {
    opacity: 0,
    scale: 1.2,
    transition: {
      duration: 0.5,
    },
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duiration: 1,
    },
  },
};

export const photoAnim = {
  hidden: {
    scale: 0.9,
    // opacity: 0,
    x: 50,
    y: 50,
    perspective: "1000px",
    rotateY: "360deg",
    transition: {
      ease: "easeOut",
      duration: 1.2,
    },
  },
  show: {
    scale: 1,
    // opacity: 1,
    x: 0,
    y: 0,
    perspective: "2000px",
    rotateY: "341deg",
    transition: {
      ease: "easeOut",
      duration: 0.75,
    },
  },
};

export const lineAnim = {
  hidden: { width: "0%" },
  show: {
    width: "100%",
    transition: { duration: 1 },
  },
};

// TODO: Delete
// Page Transition
export const Frame1 = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fffebf;
  z-index: 999;
`;

export const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

export const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

export const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export const slider = {
  hidden: {
    x: "-130%",
    skew: "45deg",
  },
  show: {
    x: "100%",
    skew: "0deg",
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
};

export const sliderContainer = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};
