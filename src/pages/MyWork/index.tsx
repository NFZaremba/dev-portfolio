import { Dispatch, useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import { fullpageAnimation, contentAnim } from "../../shared/animation";
import { IProject } from "./types";
import { swipePower, useScroll } from "../../shared/utils";

import spotifyImg from "../../assets/img/spotify-visualization-app.png";
import theracer from "../../assets/img/theracer-small.png";
import TypeScriptIcon from "../../shared/icons/TypeScriptIcon";
import ReactIcon from "../../shared/icons/ReactIcon";
import { PageSlider } from "../../shared/components";

export const projects: IProject[] = [
  {
    id: "spotify-app",
    title: "Spotify Visualization App",
    stackIcon: <TypeScriptIcon />,
    image: spotifyImg,
    description:
      "A web app that lets users visualize their personalized Spotify data built with Node.js, Express, React, Styled Components, and the Spotify API.",
    links: [
      {
        site: "Github",
        url: "/https://github.com/NFZaremba/spotify-app",
        icon: "ri-github-line",
      },
      {
        site: "Site",
        url: "/https://spotify-visualization-app.herokuapp.com/",
        icon: "ri-global-line",
      },
    ],
  },
  {
    id: "racer",
    title: "React Query Table",
    stackIcon: <ReactIcon />,
    image: theracer,
    description:
      "Custom Table utilizing React-Query with the compound component pattern. Including custom hooks profividing Search, Sorting, and filtering functionality.",
    links: [
      {
        site: "Github",
        url: "/https://github.com/NFZaremba/react-query-table",
        icon: "ri-github-line",
      },
      { site: "Site", url: "", icon: "ri-global-line" },
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
            <div className="flex justify-between">
              <h1 className="pb-4 text-blue-600">{project.title} </h1>
              {project.stackIcon}
            </div>
            <p className="py-4">{project.description}</p>
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
              variants={cardVariants}
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
              <motion.div className="flex flex-col justify-end h-full p-6 rounded-2xl bg-gallery">
                <h2 className="text-3xl pb-4">{project.title}</h2>
              </motion.div>
            </motion.div>
          </AnimatePresence>
          <div className="flex absolute items-center left-2/4 m-auto transform -translate-y-2/4 -translate-x-2/4 -bottom-20">
            <motion.div
              className="flex cursor-pointer m-2 flex-1"
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
                      className="w-3 h-3 rounded-full flex-1 m-2 opacity-30 bg-blue-700"
                      animate={{
                        opacity: project.id === id ? 1 : 0.3,
                      }}
                    />
                  )
                ),
              [project.id]
            )}
            <motion.div
              className="flex cursor-pointer m-2 flex-1"
              onClick={() => paginate(-1)}
            >
              <i className="ri-arrow-right-s-fill text-gray-900 hover:bg-blue-300"></i>
            </motion.div>
          </div>
        </PageSlider.Right>
      </PageSlider.Content>
    </PageSlider>
  );
};

export default MyWork;
