import { motion } from "framer-motion";

export interface IExpereienceData {
  [key: string]: string;
}

export const experienceData: IExpereienceData[] = [
  {
    companyName: "Hostwinds",
    jobTitle: "Lead Engineer/Architect",
    location: "Seattle, WA",
  },
  {
    companyName: "QCM Media",
    jobTitle: "Front End / React Developer",
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
      className="flex justify-center"
    >
      <div className="flex justify-center  flex-col ">
        {experienceData.map((item, i) => (
          <motion.div
            key={item.jobTitle}
            variants={itemMotion}
            className={`relative flex items-center opacity-100  ${
              i !== 0 ? " sm:mt-14" : ""
            } `}
          >
            {i !== experienceData.length - 1 ? (
              <div className="absolute hidden sm:block h-20 top-14 w-0.5 bg-black left-1" />
            ) : null}
            <div className="w-2 h-2 bg-gray-700 rounded-full "></div>
            <div className="ml-8 text-black-700 ">
              <p className="text-base font-medium ">{item.jobTitle}</p>
              <p className="text-base">{item.companyName}</p>
              <p className="flex items-center text-sm mt-0.5 dark:text-white-500">
                {item.location}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
