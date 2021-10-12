import { Dispatch, useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import swipePower from "../../shared/utils/swipePower";
import useScroll from "../../shared/utils/useScroll";
import { PageSlider } from "../../shared/components";
import { projects } from "./__data__";

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

const swipeThreshold = 10000;

export interface IMyWork {
  setSectionTitle: Dispatch<string>;
}

const MyWork = ({ setSectionTitle }: IMyWork) => {
  const [ref, controls, inView] = useScroll();
  const [[page, direction], setPage] = useState([0, 0]);
  const [project, setProject] = useState(projects[0]);

  useEffect(() => {
    if (inView) {
      setSectionTitle("Projects");
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
      <PageSlider.Content animate={controls} initial="hidden">
        <PageSlider.Left>
          <PageSlider.Header>Most Recent Work</PageSlider.Header>
          <div className="p-4 text-lg font-medium w-full divide-y">
            <div className="flex justify-between">
              <h1 className=" text-lg sm:text-xl pb-4 text-blue-600 font-semibold">
                {project.title}
              </h1>
              {project.stackIcon}
            </div>
            <div>
              <p className=" text-base sm:text-lg py-4">
                {project.description}
              </p>
              <div className="flex justify-center items-center m-auto ">
                <motion.div
                  className="flex cursor-pointer m-2"
                  onClick={() => paginate(1)}
                >
                  <i className="ri-arrow-left-s-fill text-gray-900  hover:bg-blue-300"></i>
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
                  <i className="ri-arrow-right-s-fill text-gray-900 hover:bg-blue-300"></i>
                </motion.div>
              </div>
            </div>
            <div className="flex pt-4">
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
          </div>
        </PageSlider.Left>
        <PageSlider.Right>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              className="absolute left-0 right-0 mx-auto rounded-3xl h-full border-blue-500"
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
              <motion.div className="flex flex-col justify-start h-full p-6 rounded-3xl bg-gallery ">
                <h2 className=" hidden text-3xl p-4 w-max bg-gray-900 shadow-2xl sm:inline-block -ml-8">
                  {project.title}
                </h2>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </PageSlider.Right>
      </PageSlider.Content>
    </PageSlider>
  );
};

export default MyWork;
