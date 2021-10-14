import { Dispatch, useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import swipePower from "../../shared/utils/swipePower";
import useScroll from "../../shared/utils/useScroll";
import { Overlay, PageSlider, Toggle } from "../../shared/components";
import { projects, IProject } from "./__data__";
import { ISectionTitle } from "../../shared/types";
import { COLORS } from "../../shared/constants";
import { useIsLarge } from "../../shared/utils/useMediaQuery";

export const swipeMotion = {
  enter: (direction: number) => {
    return {
      boxShadow: "none",
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const Controls = ({
  project,
  paginate,
}: {
  project: IProject;
  paginate: (arg: number) => void;
}) => (
  <div className="absolute -top-5 lg:top-5 left-2/4 lg:left-1/4 transform -translate-x-2/4 flex justify-center items-center m-auto shadow-inner bg-purple-200 rounded-3xl shadow-2xl">
    <motion.div className="flex cursor-pointer m-2" onClick={() => paginate(1)}>
      <i className="ri-arrow-left-s-fill text-4xl text-gray-900 hover:bg-purple-100 rounded-full"></i>
    </motion.div>
    {useMemo(
      () =>
        projects.map(
          ({ id }): JSX.Element => (
            <motion.div
              key={`page-${id}`}
              className="w-3 h-3 rounded-full m-2 opacity-30 bg-blue-700"
              animate={{
                opacity: project.id === id ? 1 : 0.3,
              }}
            />
          )
        ),
      [project.id]
    )}
    <motion.div
      className="flex cursor-pointer m-2"
      onClick={() => paginate(-1)}
    >
      <i className="ri-arrow-right-s-fill text-4xl text-gray-900 hover:bg-purple-100 rounded-full"></i>
    </motion.div>
  </div>
);

const swipeThreshold = 10000;

export interface IMyWork {
  setSectionTitle: Dispatch<ISectionTitle>;
}

const MyWork = ({ setSectionTitle }: IMyWork) => {
  const [ref, controls, inView] = useScroll();
  const [[page, direction], setPage] = useState([0, 0]);
  const [project, setProject] = useState(projects[0]);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const isLarge = useIsLarge();

  useEffect(() => {
    if (inView) {
      setSectionTitle({ title: "Recent Work", color: COLORS.myWork.color });
    }
  }, [setSectionTitle, inView]);

  useEffect(() => {
    const index = wrap(0, projects.length, page);
    setProject(projects[index]);
  }, [page]);

  const paginate = useCallback(
    (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
    },
    [page]
  );

  return (
    <PageSlider ref={ref} initial="hidden" animate={controls}>
      <PageSlider.Content
        animate={controls}
        initial="hidden"
        gradient={COLORS.myWork.gradient}
      >
        <Controls project={project} paginate={paginate} />
        <PageSlider.Left animate={isOpen || isLarge ? "open" : "closed"}>
          <PageSlider.Header>
            <PageSlider.Title
              color={COLORS.myWork.color}
              bgColor={COLORS.myWork.bgColor}
            >
              {project.title}
            </PageSlider.Title>
            <p className=" text-base sm:text-lg p-4">{project.description}</p>
            <div className="flex p-4">
              {project.links.map((link) => {
                return link.url !== "" ? (
                  <motion.a
                    key={link.url}
                    className="flex mr-8 text-gray-300 hover:text-gray-900"
                    href={link.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className={link.icon}></i>
                    {link.site}
                  </motion.a>
                ) : null;
              })}
            </div>
          </PageSlider.Header>
        </PageSlider.Left>
        <PageSlider.Right>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              className="absolute left-0 right-0 mx-auto rounded-3xl h-full border-blue-500 z-50"
              key={page}
              custom={direction}
              variants={swipeMotion}
              initial="enter"
              animate="center"
              exit="exit"
              style={{
                cursor: "grab",
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
              }}
              transition={{
                x: { type: "spring", stiffness: 500, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeThreshold) {
                  paginate(1);
                } else if (swipe > swipeThreshold) {
                  paginate(-1);
                }
              }}
            >
              <motion.div className="flex flex-col justify-start h-full p-6 rounded-3xl ">
                <Overlay color={COLORS.myWork.overlay} />
                <div className="flex flex-row items-center text-3xl p-4 w-max shadow-2xl -ml-8 rounded-2xl bg-gray-900">
                  <div className="inline">{project.stackIcon}</div>
                  <h3 className="inline ml-2 text-white text-lg">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
          <Toggle
            className="lg:hidden"
            toggle={() => toggleOpen()}
            animate={isOpen ? "open" : "closed"}
          />
        </PageSlider.Right>
      </PageSlider.Content>
    </PageSlider>
  );
};

export default MyWork;
