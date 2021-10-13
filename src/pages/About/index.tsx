import { Dispatch, useEffect, useMemo, useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import { PageSlider, Image } from "../../shared/components";
import useScroll from "../../shared/utils/useScroll";
import Experience from "./Experience";
import Skills from "./Skills";
import devPhoto from "../../assets/img/programmer.jpg";
import { ISectionTitle } from "../../shared/types";
import { COLORS } from "../../shared/constants";

const SegmentControl = ({
  activeItem,
  setActiveitem,
}: {
  activeItem: string;
  setActiveitem: Dispatch<string>;
}) => {
  return (
    <AnimateSharedLayout>
      <ol className=" inline-flex rounded-xl divide-x bg-tab mb-2 flex-col sm:flex-row">
        {["Experience", "Favorite Stack"].map((item) => {
          const sectionName = item.toLocaleLowerCase();
          const isActive = sectionName === activeItem;
          return (
            <motion.li
              className='"relative mb-0'
              whileTap={isActive ? { scale: 0.95 } : { opacity: 0.6 }}
              key={item}
            >
              <button
                onClick={() => setActiveitem(sectionName.toLocaleLowerCase())}
                type="button"
                className="relative m-0 py-2 px-8 bg-transparent bg-none outline-none hover:cursor-pointer focus:cursor-pointer text-lg"
              >
                {isActive && (
                  <motion.div
                    layoutId="SegmentedControlActive"
                    className="absolute inset-0 z-20 bg-white shadow-lg rounded-lg"
                  />
                )}
                <span className="relative z-30">{item}</span>
              </button>
            </motion.li>
          );
        })}
      </ol>
    </AnimateSharedLayout>
  );
};

export interface IAbout {
  setSectionTitle: Dispatch<ISectionTitle>;
}

const About = ({ setSectionTitle }: IAbout) => {
  const [ref, controls, inView] = useScroll();
  const [activeItem, setActiveitem] = useState("experience");

  useEffect(() => {
    if (inView) {
      setSectionTitle({ title: "Profile", color: COLORS.about.color });
    }
  }, [setSectionTitle, inView]);

  return (
    <PageSlider ref={ref} initial="hidden" animate={controls}>
      <PageSlider.Content animate={controls} gradient={COLORS.about.gradient}>
        <PageSlider.Left>
          <PageSlider.Header>
            <PageSlider.Title
              color={COLORS.about.color}
              bgColor={COLORS.about.bgColor}
            >
              <SegmentControl
                activeItem={activeItem}
                setActiveitem={setActiveitem}
              />
            </PageSlider.Title>
            <div className="p-4">
              {useMemo((): JSX.Element => {
                if (activeItem === "experience") return <Experience />;
                return <Skills />;
              }, [activeItem])}
            </div>
          </PageSlider.Header>
        </PageSlider.Left>
        <PageSlider.Right>
          <Image src={devPhoto} alt="contact" />
        </PageSlider.Right>
      </PageSlider.Content>
    </PageSlider>
  );
};

export default About;
