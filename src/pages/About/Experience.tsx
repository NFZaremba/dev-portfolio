import { motion } from "framer-motion";
import { COLORS } from "../../shared/constants";

export interface IExpereienceData {
  [key: string]: string;
}

export const experienceData: IExpereienceData[] = [
  {
    companyName: "Hostwinds",
    jobTitle: "Lead Engineer",
    location: "Seattle, WA",
  },
  {
    companyName: "QCM Media",
    jobTitle: "React Developer",
    location: "Seattle, WA",
  },
  {
    companyName: "Network for Justice",
    jobTitle: "Full Stack Developer",
    location: "Irvine, CA",
  },
];

const containerMotion = {
  hidden: {},
  show: {
    transition: {
      delay: 1,
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemMotion = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

const Experience = () => {
  return (
    <motion.div
      variants={containerMotion}
      initial="hidden"
      animate="show"
      className="grid grid-cols-skills gap-2 lg:gap-6"
    >
      {experienceData.map((item, i) => (
        <motion.div
          key={item.jobTitle}
          variants={itemMotion}
          className={`relative flex flex-col items-center p-4 shadow-xl rounded-2xl ${COLORS.about.bgColor} divide-y`}
        >
          <h3 className={`text-base font-medium ${COLORS.about.color}`}>
            {item.jobTitle}
          </h3>
          <div className="flex flex-col items-center justify-center pt-4">
            <p className="text-base">{item.companyName}</p>
            <p className="flex items-center text-sm mt-0.5 ">{item.location}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Experience;
