import { motion } from "framer-motion";
import { Frame1 } from "./styles";

export const slider = {
  hidden: {
    x: "-150%",
    zIndex: 40,
    transition: {
      duration: 2,
    },
  },
  show: {
    x: "100%",
    zIndex: 0,
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
};

export const sliderContainer = {
  hidden: {
    opacity: 1,
    inset: 0,
  },
  show: {
    opacity: 1,
    inset: "auto",
    transition: {
      delay: 1,
    },
  },
};

/**
    Page Transition Component

    A container component that renders different frames for the colorful 
    page transition
*/
const FrameTransition: React.FC = () => {
  return (
    <motion.div
      variants={sliderContainer}
      className="absolute overflow-hidden"
      data-testid="page-transiion"
    >
      <Frame1 variants={slider} data-testid="frame" />
      {/* <Frame2 variants={slider} data-testid="frame" />
      <Frame3 variants={slider} data-testid="frame" />
      <Frame4 variants={slider} data-testid="frame" />
      <Frame5 variants={slider} data-testid="frame" /> */}
    </motion.div>
  );
};

export default FrameTransition;
