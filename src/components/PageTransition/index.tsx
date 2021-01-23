// Animation
import {
  Frame1,
  Frame2,
  Frame3,
  Frame4,
  slider,
  sliderContainer,
} from "../../shared/animation";
import { motion } from "framer-motion";

/*
    Page Transition Component

    A container component that renders different frames for the colorful 
    page transition
*/
const PageTransition: React.FC = () => (
  <motion.div variants={sliderContainer} data-testid="page-transiion">
    <Frame1 variants={slider} data-testid="frame" />
    <Frame2 variants={slider} data-testid="frame" />
    <Frame3 variants={slider} data-testid="frame" />
    <Frame4 variants={slider} data-testid="frame" />
  </motion.div>
);

export default PageTransition;
