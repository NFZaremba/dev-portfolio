import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Card } from "../../components";
import { IProject } from "./types";
import { wrap } from "@popmotion/popcorn";

//* Animations
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

//* Types
export interface ICardGalleryProps {
  projects: IProject[];
}

/**
 * Gallery component
 *
 * @param projects
 * @returns
 */
const CardGallery = ({ projects }: ICardGalleryProps) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, projects.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const renderIndicators = useMemo(() => {
    const pages = Array.from(projects);
    return pages.map((_, index: number) => (
      <motion.div
        key={`page-${index}`}
        className="page-indicator"
        animate={{
          opacity: imageIndex === index ? 1 : 0.3,
        }}
      />
    ));
  }, [projects, imageIndex]);

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
            <Card.Body>{projects[imageIndex].preview}</Card.Body>
            <Card.Button onClick={() => {}}>🠚</Card.Button>
          </Card.Content>
        </Card>
      </AnimatePresence>
      <div className="gallery-controls">
        <motion.div className="prev" onClick={() => paginate(1)}>
          <i className="ri-arrow-left-s-fill"></i>
        </motion.div>
        {renderIndicators}
        <motion.div className="next" onClick={() => paginate(-1)}>
          <i className="ri-arrow-right-s-fill"></i>
        </motion.div>
      </div>
    </div>
  );
};

export default CardGallery;
