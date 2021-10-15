import ReactIcon from "../../shared/icons/ReactIcon";
import { motion } from "framer-motion";
import TypeScriptIcon from "../../shared/icons/TypeScriptIcon";
import ReactQueryIcon from "../../shared/icons/ReactQueryIcon";
import reactTestingImg from "../../assets/img/react-testing-library.png";
import StorybookIcon from "../../shared/icons/StorybookIcon";
import ReactHookFormIcon from "../../shared/icons/ReactHookFormIcon";
import TailwindIcon from "../../shared/icons/TailwindIcon";
import NodeIcon from "../../shared/icons/NodeIcon";
import { COLORS } from "../../shared/constants";
import React from "react";

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

const SkillItem = ({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) => (
  <motion.div
    variants={itemMotion}
    className={`text-center py-2 shadow-xl rounded-2xl ${COLORS.about.bgColor}`}
  >
    {children}
    <p className="text-sm sm:text-base">{text}</p>
  </motion.div>
);

const Skills = () => {
  return (
    <motion.div
      variants={containerMotion}
      initial="hidden"
      animate="show"
      className=" grid grid-cols-skills gap-2 lg:gap-6"
    >
      <SkillItem text="React">
        <ReactIcon className="mx-auto" />
      </SkillItem>
      <SkillItem text="TypeScript">
        <TypeScriptIcon className="mx-auto" />
      </SkillItem>
      <SkillItem text="React Query">
        <ReactQueryIcon className="mx-auto" />
      </SkillItem>
      <SkillItem text="React Testing Library">
        <img className="w-9 h-9 mx-auto" src={reactTestingImg} alt="rtl" />
      </SkillItem>
      <SkillItem text="React Hook Form">
        <ReactHookFormIcon className="mx-auto" />
      </SkillItem>
      <SkillItem text="Storybook">
        <StorybookIcon className="mx-auto" />
      </SkillItem>
      <SkillItem text="TailwindCSS">
        <TailwindIcon className="mx-auto" />
      </SkillItem>
      <SkillItem text="Node.js">
        <NodeIcon className="mx-auto" />
      </SkillItem>
    </motion.div>
  );
};

export default Skills;
