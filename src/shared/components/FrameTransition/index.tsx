import { motion } from "framer-motion";
import { Frame1 } from "./styles";

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
