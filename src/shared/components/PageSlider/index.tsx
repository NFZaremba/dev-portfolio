import { forwardRef } from "react";
import {
  IPageSliderComp,
  IPageSliderContentLeft,
  IPageSliderContentProps,
  IPageSliderContentRight,
  IPageSliderProps,
} from "./types";
import { motion } from "framer-motion";

const PageSlider = forwardRef<HTMLDivElement, IPageSliderProps>(
  ({ children, classes, ...props }: IPageSliderProps, ref): JSX.Element => {
    return (
      <motion.section
        ref={ref}
        className=" pt-40 h-screen max-w-screen-xl mx-auto "
        {...props}
      >
        {children}
      </motion.section>
    );
  }
) as IPageSliderComp;

const PageSliderTitle = ({ children }: IPageSliderProps): JSX.Element => (
  <div
    className="
    overflow-hidden z-10 mx-auto mt-10"
  >
    {children}
  </div>
);

const PageSliderContent = ({
  children,
  classes,
  ...props
}: IPageSliderContentProps): JSX.Element => {
  return (
    <motion.div
      className="
      relative flex h-2/5 w-full mx-auto  
      lg:h-4/6"
      {...props}
    >
      {children}
      <div className="absolute bg-gray-100 top-2/4 right-0 left-0 rounded-3xl -z-10  h-3/4 -translate-y-2/4 "></div>
      <div className="absolute w-full rounded-3xl -z-10 top-2/4 h-3/4 -translate-y-2/4 transform shadow-lg bg-gradient-to-br from-blue-500 to-rose-500 -rotate-2"></div>
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
      // className="
      // text-black mb-4 text-5xl border-l-4 border-blue-500 pl-8
      // sm:text-6xl
      // md:text-8xl"
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
    <div className="flex justify-center bg-white my-28 w-2/4 relative z-10 lg:rounded-xl shadow-lg -mr-8 ml-4">
      {children}
    </div>
  );
};

const PageSliderRight = ({ children }: IPageSliderContentRight) => {
  return <div className="w-2/4 z-2">{children}</div>;
};

PageSlider.Title = PageSliderTitle;
PageSlider.SubHeader = PageSliderSubHeader;
PageSlider.Header = PageSliderHeader;
PageSlider.Content = PageSliderContent;
PageSlider.Left = PageSliderLeft;
PageSlider.Right = PageSliderRight;

export default PageSlider;
