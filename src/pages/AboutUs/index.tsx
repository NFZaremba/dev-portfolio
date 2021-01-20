// Components
import { About, Faq, Services } from "../../components";
// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../../shared/animation";

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <About />
      <Services />
      <Faq />
    </motion.div>
  );
};

export default AboutUs;
