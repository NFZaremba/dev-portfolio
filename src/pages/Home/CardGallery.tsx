import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Card } from "../../components";
import { IProject } from "./MyWork/types";
import { wrap } from "@popmotion/popcorn";

const cardVariants = {
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
    boxShadow: "hsl(280deg 100% 22% / 55%) 5px 3px 0px",
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export interface ICardGalleryProps {
  projects: IProject[];
}

const CardGallery = ({ projects }: ICardGalleryProps) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, projects.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const pages = Array.from(projects);

  return (
    <div className="gallery">
      <AnimatePresence initial={false} custom={direction}>
        <Card
          key={page}
          image={projects[imageIndex].image}
          custom={direction}
          variants={cardVariants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{
            cursor: "grab",
          }}
          transition={{
            x: { type: "spring", stiffness: 500, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <Card.Content>
            <Card.Header>{projects[imageIndex].title}</Card.Header>
            {/* <Divider
              width={100}
              color={themeColor}
              variants={lineAnim}
              initial="hidden"
            /> */}
            <Card.Body>{projects[imageIndex].preview}</Card.Body>
            <Card.Button onClick={() => {}}>🠚</Card.Button>
          </Card.Content>
        </Card>
      </AnimatePresence>
      <div className="gallery-controls">
        <motion.div className="prev" onClick={() => paginate(1)}>
          <i className="ri-arrow-left-s-fill"></i>
        </motion.div>
        {pages.map((_, index: number) => {
          console.log(index);
          return (
            <motion.div
              className="page-indicator"
              animate={{
                opacity: imageIndex === index ? 1 : 0.3,
              }}
            />
          );
        })}
        <motion.div className="next" onClick={() => paginate(-1)}>
          <i className="ri-arrow-right-s-fill"></i>
        </motion.div>
      </div>
    </div>
  );
};

export default CardGallery;
