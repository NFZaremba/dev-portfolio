import About from "./About";
import MyWork from "./MyWork";
import { motion } from "framer-motion";
import { pageAnimation } from "../../shared/animation";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <About />
      <MyWork />
      <ContactUs />
    </motion.div>
  );
};

export default Home;
