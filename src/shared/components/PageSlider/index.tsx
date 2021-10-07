import { forwardRef, useEffect } from "react";
import {
  IPageSliderComp,
  IPageSliderContentLeft,
  IPageSliderContentProps,
  IPageSliderContentRight,
  IPageSliderProps,
} from "./types";
import { motion, useAnimation, useCycle } from "framer-motion";
import { FrameTransition } from "..";

const containerMotion = {
  hidden: {
    // overflow: "hidden",
    // backgroundColor: "#374151",
    transition: {
      duration: 0.1,
    },
  },
  show: {
    // overflow: "visible",
    // backgroundColor: "none",
    transition: {
      delay: 1.5,
    },
  },
};

const rightContainerMotion = {
  hidden: {
    // width: 0,
    opacity: 0,
    x: -500,
    transition: {
      duration: 0.6,
    },
  },
  show: {
    // width: "50%",
    opacity: 1,
    x: 0,
    transition: {
      // ease: [0.76, 0, 0.24, 1],
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
      // ease: [0.76, 0, 0.24, 1],
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
  ({ children, classes, ...props }: IPageSliderProps, ref): JSX.Element => {
    return (
      <motion.section
        ref={ref}
        className="flex justify-center items-center h-screen max-w-screen-xl mx-auto "
        {...props}
      >
        {children}
      </motion.section>
    );
  }
) as IPageSliderComp;

const PageSliderTitle = ({ children }: IPageSliderProps): JSX.Element => (
  <div className="overflow-hidden z-10 mx-auto mt-10">{children}</div>
);

const PageSliderContent = ({
  children,
  classes,
  ...props
}: IPageSliderContentProps): JSX.Element => {
  return (
    <motion.div
      className="relative flex h-2/5 w-full mx-auto lg:h-4/6"
      {...props}
    >
      {children}
      <motion.div
        className="absolute bg-gray-100 top-2/4 right-0 left-0 rounded-3xl -z-10 h-3/4 "
        variants={backLayerMotion1}
      />
      <motion.div
        className="absolute w-full rounded-3xl -z-10 top-2/4 h-3/4 transform shadow-lg bg-gradient-to-br from-blue-500 to-rose-500 -rotate-2"
        variants={backLayerMotion2}
      />
    </motion.div>
  );
};

const PageSliderHeader = ({
  children,
  ...props
}: IPageSliderProps): JSX.Element => {
  return (
    <motion.h3
      className="p-4 rounded-l-xl w-48 flex-none bg-purple-50 text-blue-500 text-xl"
      {...props}
    >
      {children}
    </motion.h3>
  );
};

const PageSliderSubHeader = ({
  children,
  ...props
}: IPageSliderProps): JSX.Element => {
  return (
    <motion.h3 className="text-3xl pt-0 px-4" {...props}>
      {children}
    </motion.h3>
  );
};

const PageSliderLeft = ({ children }: IPageSliderContentLeft) => {
  return (
    <motion.div
      className="flex justify-center bg-white my-28 w-2/4 relative z-50 lg:rounded-xl shadow-xl -mr-8 ml-4 "
      variants={leftContainerMotion}
    >
      {children}
    </motion.div>
  );
};

const PageSliderRight = ({ children }: IPageSliderContentRight) => {
  return (
    <motion.div
      // variants={containerMotion}
      variants={rightContainerMotion}
      className="w-2/4 z-2 rounded-3xl relative "
      // animate={{
      //   // x: 0,
      //   // backgroundColor: "#374151",
      //   // boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
      //   overflow: "hidden",
      //   transitionEnd: {
      //     overflow: "visible",
      //   },
      // }}
      // initial={{}}
    >
      {/* <motion.div className="w-full h-full" variants={rightContainerMotion}>
        {children}
      </motion.div> */}
      {children}
      {/* <FrameTransition /> */}
    </motion.div>
  );
};

PageSlider.Title = PageSliderTitle;
PageSlider.SubHeader = PageSliderSubHeader;
PageSlider.Header = PageSliderHeader;
PageSlider.Content = PageSliderContent;
PageSlider.Left = PageSliderLeft;
PageSlider.Right = PageSliderRight;

export default PageSlider;
