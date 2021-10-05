import { forwardRef } from "react";
import {
  IPageSliderComp,
  IPageSliderContentProps,
  IPageSliderProps,
} from "./types";
import { motion } from "framer-motion";

const PageSlider = forwardRef<HTMLDivElement, IPageSliderProps>(
  ({ children, classes, ...props }: IPageSliderProps, ref): JSX.Element => {
    return (
      <motion.section
        ref={ref}
        className="h-screen flex items-center"
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
    absolute overflow-hidden transform -translate-y-1/2 ml-16 z-10 right-2/4 mx-auto max-w-screen-lg
    sm:top-3/4
    md:ml-32 top-3/4"
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
      max-w-screen-lg relative overflow-hidden items-center justify-evenly h-2/5 bottom-20 w-full bg-gray-700 shadow-2xl mx-auto
      md:bottom-40
      lg:h-2/4 l"
      {...props}
    >
      {children}
    </motion.div>
  );
};

const PageSliderHeader = ({
  children,
  ...props
}: IPageSliderProps): JSX.Element => {
  return (
    <motion.h2
      className="
      text-black mb-4 text-5xl 
      sm:text-6xl 
      md:text-9xl"
      {...props}
    >
      {children}
    </motion.h2>
  );
};

const PageSliderSubHeader = ({
  children,
  ...props
}: IPageSliderProps): JSX.Element => {
  return (
    <motion.h3 className="text-3xl pt-0 pb-12 px-4" {...props}>
      {children}
    </motion.h3>
  );
};

PageSlider.Title = PageSliderTitle;
PageSlider.SubHeader = PageSliderSubHeader;
PageSlider.Header = PageSliderHeader;
PageSlider.Content = PageSliderContent;

export default PageSlider;
