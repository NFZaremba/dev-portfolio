import ReactIcon from "../../shared/icons/ReactIcon";
import TypeScriptIcon from "../../shared/icons/TypeScriptIcon";
import ReactQueryIcon from "../../shared/icons/ReactQueryIcon";
import reactTestingImg from "../../assets/img/react-testing-library.png";
import StorybookIcon from "../../shared/icons/StorybookIcon";
import ReactHookFormIcon from "../../shared/icons/ReactHookFormIcon";
import TailwindIcon from "../../shared/icons/TailwindIcon";
import { motion } from "framer-motion";

const containerMotion = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemMotion = {
  hidden: { rotate: 90, scale: 0, top: 100 },
  show: { rotate: 0, scale: 1, top: 30 },
};

const Skills = () => {
  return (
    <motion.div
      variants={containerMotion}
      initial="hidden"
      animate="show"
      className="max-w-md mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6"
    >
      <motion.div
        variants={itemMotion}
        className="text-center py-2 shadow-xl rounded-md"
      >
        <ReactIcon className="mx-auto" />
        <p>React</p>
      </motion.div>
      <motion.div
        variants={itemMotion}
        className="text-center py-2 shadow-xl rounded-md"
      >
        <TypeScriptIcon className="mx-auto" />
        <p>TypeScript</p>
      </motion.div>
      <motion.div
        variants={itemMotion}
        className="text-center py-2 shadow-xl rounded-md"
      >
        <ReactQueryIcon className="mx-auto" />
        <p>React Query</p>
      </motion.div>
      <motion.div
        variants={itemMotion}
        className="text-center py-2 shadow-xl rounded-md"
      >
        <img className="w-9 h-9 mx-auto" src={reactTestingImg} alt="rtl" />
        <p>React Testing Library</p>
      </motion.div>
      <motion.div
        variants={itemMotion}
        className="text-center py-2 shadow-xl rounded-md"
      >
        <ReactHookFormIcon className="mx-auto" />
        <p>React Hook Form</p>
      </motion.div>
      <motion.div
        variants={itemMotion}
        className="text-center py-2 shadow-xl rounded-md"
      >
        <StorybookIcon className="mx-auto" />
        <p>Storybook</p>
      </motion.div>
      <motion.div
        variants={itemMotion}
        className="text-center py-2 shadow-xl rounded-md"
      >
        <TailwindIcon className="mx-auto" />
        <p>TailwindCSS</p>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
