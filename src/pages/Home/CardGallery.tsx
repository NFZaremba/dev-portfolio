import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Card } from "../../components";
import { IProject } from "./MyWork/types";

const cardVariants = {
  initial: (next: boolean) => ({
    x: next ? -1200 : 1200,
  }),
  animate: {
    zIndex: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
  exit: (next: boolean) => ({
    // opacity: 0,
    zIndex: 0,
    x: next ? 1200 : -1200,
    transition: {
      duration: 0.4,
    },
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export interface ICardGalleryProps {
  projects: IProject[];
}

const CardGallery = ({ projects }: ICardGalleryProps) => {
  const [selected, setSelected] = useState(0);
  const [buttonAboutToBeClicked, setAboutToBeClicked] = useState("next");

  const next = () => {
    if (selected === projects.length - 1) {
      setSelected(0);
    } else {
      setSelected((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (selected === 0) {
      setSelected(projects.length - 1);
    } else {
      setSelected((prev) => prev - 1);
    }
  };

  const pages = Array.from(projects);
  const indicatorSize = 10;
  const indicatorAlpha = 0.3;

  return (
    <div className="gallery">
      {projects.map(({ id, image, title, preview }, index) => (
        <AnimatePresence key={id}>
          {index === selected ? (
            <Card
              id={id}
              image={image}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={cardVariants}
              custom={buttonAboutToBeClicked === "next"}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  setAboutToBeClicked("prev");
                  prev();
                } else if (swipe > swipeConfidenceThreshold) {
                  setAboutToBeClicked("next");
                  next();
                }
              }}
            >
              <Card.Content>
                <Card.Header>{title}</Card.Header>
                {/* <Divider
                width={100}
                color={themeColor}
                variants={lineAnim}
                initial="hidden"
              /> */}
                <Card.Body>{preview}</Card.Body>
                <Card.Button
                  //   color={themeColor}
                  // onClick={() => history.push(`work/${id}`)}
                  onClick={() => {}}
                >
                  🠚
                </Card.Button>
              </Card.Content>
            </Card>
          ) : null}
        </AnimatePresence>
      ))}
      <div className="gallery-controls">
        <motion.div
          className="prev"
          onClick={prev}
          onMouseEnter={() => setAboutToBeClicked("prev")}
        >
          <i className="ri-arrow-left-s-fill"></i>
        </motion.div>
        {pages.map((_, index: number) => {
          console.log(index);
          return (
            <motion.div
              style={{
                width: indicatorSize,
                height: indicatorSize,
                borderRadius: "50%",
                backgroundColor: "#fff",
                flex: 1,
                margin: ".5rem",
                opacity: indicatorAlpha,
              }}
              animate={{
                opacity: selected === index ? 1 : indicatorAlpha,
              }}
            />
          );
        })}
        <motion.div
          className="next"
          onClick={next}
          onMouseEnter={() => setAboutToBeClicked("next")}
        >
          <i className="ri-arrow-right-s-fill"></i>
        </motion.div>
      </div>
    </div>
  );
};

export default CardGallery;
