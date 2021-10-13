import { forwardRef } from "react";
import { motion } from "framer-motion";
import { IPageSliderComp, IPageSliderProps } from "./types";

// Initial fullpage animation
export const fullpageAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.17,
      delayChildren: 0.06,
    },
  },
};

export const contentAnim = {
  hidden: {
    scale: 0.5,
    opacity: 0,
    x: 50,
    y: 100,
    transition: {
      ease: "easeOut",
      duration: 2,
    },
  },
  show: {
    scale: 1,
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.6,
    },
  },
};

const rightContainerMotion = {
  hidden: {
    opacity: 0,
    x: -500,
    transition: {
      duration: 0.6,
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.1,
    },
  },
};

const leftContainerMotion = {
  hidden: {
    x: 500,
    transition: {
      duration: 0.6,
    },
  },
  show: {
    x: 0,
    transition: {
      duration: 1.1,
    },
  },
};

const backLayerMotion1 = {
  hidden: {
    y: "-70%",
    opacity: 0,
    rotate: -10,
    transition: {
      duration: 0.6,
    },
  },
  show: {
    y: "-50%",
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 1.1,
    },
  },
};

const backLayerMotion2 = {
  hidden: {
    y: "-30%",
    opacity: 0,
    rotate: 10,
    transition: {
      duration: 0.6,
    },
  },
  show: {
    y: "-50%",
    opacity: 1,
    rotate: -2,
    transition: {
      duration: 1.1,
    },
  },
};

const PageSlider = forwardRef<HTMLDivElement, IPageSliderProps>(
  ({ children, ...props }: IPageSliderProps, ref): JSX.Element => {
    return (
      <motion.section
        ref={ref}
        className="flex justify-center items-center h-screen max-w-screen-xl mx-auto"
        variants={fullpageAnimation}
        {...props}
      >
        {children}
      </motion.section>
    );
  }
) as IPageSliderComp;

const Content = ({
  children,
  gradient,
  ...props
}: IPageSliderProps): JSX.Element => {
  return (
    <motion.div
      className="relative justify-center items-center mx-8 flex flex-col-reverse h-[90%] w-full xl:mx-0 lg:flex-row lg:h-4/6  lg:items-stretch lg:justify-start"
      variants={contentAnim}
      {...props}
    >
      {children}
      <motion.div
        className="absolute w-4/5 bg-gray-100 lg:w-full h-[87%] top-2/4 rounded-3xl -z-10 lg:h-3/4 "
        variants={backLayerMotion1}
      />
      <motion.div
        className={`absolute w-4/5 lg:w-full h-[87%] rounded-3xl -z-10  top-2/4 lg:h-3/4 transform shadow-lg bg-gradient-to-br to-rose-500 -rotate-2 ${gradient}`}
        variants={backLayerMotion2}
      />
    </motion.div>
  );
};

// const Header = ({ children, ...props }: IPageSliderProps): JSX.Element => {
//   return (
//     <motion.h3
//       className="p-4 rounded-xl sm:rounded-r-none sm:rounded-l-xl flex-none bg-purple-50 text-blue-700 text-xl lg:w-48"
//       {...props}
//     >
//       {children}
//     </motion.h3>
//   );
// };

const Header = ({ children }: IPageSliderProps): JSX.Element => {
  return <div className="text-lg font-medium w-full divide-y">{children}</div>;
};

const Title = ({ children, color, bgColor }: IPageSliderProps) => {
  return (
    <h1 className={`p-4 ${color} ${bgColor} font-semibold  rounded-t-xl`}>
      {children}
    </h1>
  );
};

const Left = ({ children }: IPageSliderProps) => {
  return (
    <motion.div
      className="flex flex-col z-10 -mt-40 min-h-[50%] sm:h-3/6 sm:justify-center bg-white lg:my-28 w-4/5 relative  rounded-xl shadow-xl ml-4 sm:flex-row lg:-mr-8 lg:w-2/4 lg:h-auto lg:z-50"
      variants={leftContainerMotion}
    >
      {children}
    </motion.div>
  );
};

const Right = ({ children }: IPageSliderProps) => {
  return (
    <motion.div
      variants={rightContainerMotion}
      className="w-full h-2/4 z-2 rounded-3xl relative lg:h-full lg:w-2/4"
    >
      {children}
    </motion.div>
  );
};

PageSlider.Header = Header;
PageSlider.Title = Title;
PageSlider.Content = Content;
PageSlider.Left = Left;
PageSlider.Right = Right;

export default PageSlider;
