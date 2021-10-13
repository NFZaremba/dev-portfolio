import { Dispatch, useEffect } from "react";
import { Image, PageSlider } from "../../shared/components";
import useScroll from "../../shared/utils/useScroll";
import seattle from "../../assets/img/seattle.jpg";
import {
  IBaseComponentPropsWithMotion,
  ISectionTitle,
} from "../../shared/types";
import { COLORS } from "../../shared/constants";
import { motion, useCycle } from "framer-motion";

interface IPath extends IBaseComponentPropsWithMotion {
  d?: string;
}

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 50% 100%)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(45px at 50% 100%)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Path = (props: IPath) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }: { toggle: () => void }) => (
  <button
    className=" flex justify-center items-center outline-none border-none cursor-pointer absolute w-14 h-14 bg-transparent rounded-full -bottom-3 left-2/4 transform -translate-x-2/4"
    onClick={toggle}
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

interface IIntroProps {
  setSectionTitle: Dispatch<ISectionTitle>;
}

const Intro: React.FC<IIntroProps> = ({ setSectionTitle }) => {
  const [ref, controls, inView] = useScroll();
  const [isOpen, toggleOpen] = useCycle(false, true);

  useEffect(() => {
    if (inView) {
      setSectionTitle({ title: "Who am I", color: COLORS.intro.color });
    }
  }, [setSectionTitle, inView]);

  return (
    <PageSlider
      ref={ref}
      initial="hidden"
      animate={controls}
      data-testid="about-section"
    >
      <PageSlider.Content gradient={COLORS.intro.gradient}>
        <PageSlider.Left animate={isOpen ? "open" : "closed"} isOpen={isOpen}>
          <PageSlider.Header>
            <PageSlider.Title
              color={COLORS.intro.color}
              bgColor={COLORS.intro.bgColor}
            >
              Hi, I'm Nick!
            </PageSlider.Title>
            <p className="p-4">
              I have a passion for creating software solutions with great user
              experience in mind. Always looking to improve my skills, as well
              as providing my services and experience in a team or solo
              environment.
            </p>
          </PageSlider.Header>
          <motion.div
            className="absolute inset-0 bg-black rounded-3xl"
            variants={sidebar}
          />
        </PageSlider.Left>
        <motion.div animate={isOpen ? "open" : "closed"}>
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.div>
        <PageSlider.Right>
          <Image src={seattle} alt="seattle" />
        </PageSlider.Right>
      </PageSlider.Content>
    </PageSlider>
  );
};

export default Intro;
