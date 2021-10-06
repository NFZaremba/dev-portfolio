import { PageSlider } from "../../shared/components";
import {
  fullpageAnimation,
  contentAnim,
  titleAnim,
} from "../../shared/animation";
import { IProject } from "./types";
import athlete from "../../assets/img/athlete-small.png";
import theracer from "../../assets/img/theracer-small.png";
import { swipePower, useScroll } from "../../shared/utils";
import Gallery from "./Gallery";
import { useCallback, useEffect, useMemo, useState } from "react";
import { wrap } from "@popmotion/popcorn";
import { AnimatePresence, motion } from "framer-motion";

export const projects: IProject[] = [
  {
    id: "athlete",
    title: "The Athlete",
    techStack: [
      "react",
      "typescript",
      "styled components",
      "jest/react-testing-library",
      "accessibility",
      "webpack",
    ],
    image: {
      src: athlete,
      alt: "athlete",
    },
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    links: [
      { site: "Github", url: "/", icon: "ri-github-line" },
      { site: "LinkedIn", url: "/", icon: "ri-global-line" },
    ],
  },
  {
    id: "racer",
    title: "The Racer",
    techStack: [
      "react",
      "typescript",
      "styled components",
      "jest/react-testing-library",
      "accessibility",
      "webpack",
    ],
    image: {
      src: theracer,
      alt: "racer",
    },
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    links: [
      { site: "Github", url: "/", icon: "ri-github-line" },
      { site: "LinkedIn", url: "/", icon: "ri-global-line" },
    ],
  },
];

export const cardVariants = {
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

const MyWork = () => {
  const [ref, controls] = useScroll();
  const [[page, direction], setPage] = useState([0, 0]);
  const [project, setProject] = useState(projects[0]);

  useEffect(() => {
    const index = wrap(0, projects.length, page);
    setProject(projects[index]);
  }, [page, projects]);

  const paginate = useCallback(
    (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
    },
    [page]
  );

  return (
    <PageSlider
      ref={ref}
      variants={fullpageAnimation}
      initial="hidden"
      animate={controls}
    >
      <PageSlider.Content
        animate={controls}
        initial="hidden"
        variants={contentAnim}
      >
        <PageSlider.Left>
          <PageSlider.Header>Most Recent Work</PageSlider.Header>
          <div className="p-4 text-lg font-medium w-full divide-y">
            <h1 className="pb-4 text-blue-600">{project.title}</h1>
            <p className="pt-4">{project.description}</p>
          </div>
        </PageSlider.Left>
        <PageSlider.Right>
          <div className="h-full relative flex flex-col mx-2 ">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                className="absolute left-0 right-0 mx-auto rounded-2xl h-full border-blue-500"
                key={page}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                style={{
                  cursor: "grab",
                  backgroundImage: `url(${project.image.src})`,
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
                <motion.div className="flex flex-col justify-end h-full p-6 rounded-2xl bg-gallery">
                  <motion.h2 className="text-5xl pb-4">
                    {project.title}
                  </motion.h2>
                  {/* <motion.p className="pb-12">{project.description}</motion.p> */}
                  <div className="flex">
                    {project.links.map((link) => (
                      <motion.a
                        className="flex mr-8 text-gray-300"
                        href={link.url}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className={link.icon}></i>
                        {link.site}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
            <div className="flex absolute items-center left-2/4 m-auto transform -translate-y-2/4 -translate-x-2/4 -bottom-20">
              <motion.div
                className="flex cursor-pointer m-2 flex-1"
                onClick={() => paginate(1)}
              >
                <i className="ri-arrow-left-s-fill text-gray-900"></i>
              </motion.div>
              {useMemo(
                () =>
                  projects.map(
                    ({ id }): JSX.Element => (
                      <motion.div
                        key={`page-${id}`}
                        className="w-3 h-3 rounded-full flex-1 m-2 opacity-30 bg-blue-700"
                        animate={{
                          opacity: project.id === id ? 1 : 0.3,
                        }}
                      />
                    )
                  ),
                [projects, project]
              )}
              <motion.div
                className="flex cursor-pointer m-2 flex-1"
                onClick={() => paginate(-1)}
              >
                <i className="ri-arrow-right-s-fill text-gray-900"></i>
              </motion.div>
            </div>
          </div>
        </PageSlider.Right>
      </PageSlider.Content>
      {/* <PageSlider.Title>
        <PageSlider.Header variants={titleAnim}>Projects</PageSlider.Header>
        <PageSlider.SubHeader variants={titleAnim}>
          Most recent work
        </PageSlider.SubHeader>
      </PageSlider.Title> */}
    </PageSlider>
  );
};

export default MyWork;
