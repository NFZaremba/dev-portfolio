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
const PageTransition = () => (
  <motion.div variants={sliderContainer}>
    <Frame1 variants={slider} />
    <Frame2 variants={slider} />
    <Frame3 variants={slider} />
    <Frame4 variants={slider} />
  </motion.div>
);

export default PageTransition;
