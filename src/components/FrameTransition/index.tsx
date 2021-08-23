import { motion } from "framer-motion";
import styled from "styled-components";

//* Styles
export const Frame1 = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f08, #d0e);
  z-index: 999;
`;

//* Animations
export const slider = {
  hidden: {
    x: "-130%",
    skew: "45deg",
    transition: {
      duration: 2,
    },
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
  },
};

/**
    Page Transition Component

    A container component that renders different frames for the colorful 
    page transition
*/
const FrameTransition: React.FC = () => (
  <motion.div variants={sliderContainer} data-testid="page-transiion">
    <Frame1 variants={slider} data-testid="frame" />
    {/* <Frame2 variants={slider} data-testid="frame" />
    <Frame3 variants={slider} data-testid="frame" />
    <Frame4 variants={slider} data-testid="frame" />
    <Frame5 variants={slider} data-testid="frame" /> */}
  </motion.div>
);

export default FrameTransition;
