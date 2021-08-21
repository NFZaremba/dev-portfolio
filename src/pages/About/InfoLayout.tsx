import styled from "styled-components";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";

const Container = styled(motion.div)`
  position: "relative";
  height: 100%;
  background: linear-gradient(135deg, #70f, #40f);
  border-radius: 1rem;
`;

const Grid = styled(motion.ul)`
  position: relative;
  display: grid;
  width: 100%;
  height: 100%;
  padding: 4rem;
  margin: 0;
  grid-gap: 3.5rem;
  grid-template-columns: 2fr 1fr 2fr;
  grid-template-rows: repeat(2, 1fr);

  .layout__item:first-child {
    grid-area: 1/1/2/2;
  }

  .layout__item:nth-child(2) {
    grid-area: 1/2/2/4;
  }
  .layout__item:nth-child(3) {
    grid-area: 2/1/3/3;
  }
  .layout__item:nth-child(4) {
    grid-area: 2/3/3/4;
  }

  @media (max-width: 1000px) {
    padding: 4rem;
    grid-gap: 2rem;
  }

  @media (max-width: 600px) {
    padding: 3rem;
  }

  @media (max-width: 420px) {
    padding: 2rem;
    grid-gap: 2rem;
  }
`;

const Item = styled(motion.li)`
  position: relative;
  /* overflow: hidden; */
  background: #fff;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1),
    0 10px min(calc(1rem * (15 / (20 + 0.167 * 0))), 15px) 0 rgba(0, 0, 0, 0.06);
  cursor: pointer;
  will-change: transform;
  border-radius: 0.6rem;
  list-style: none;
`;

const ModalContainer = styled(motion.div)`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 8rem 13rem;
  place-content: center;
  place-items: center;
  pointer-events: none;

  @media (max-width: 1200px) {
    padding: 9rem 12rem;
  }

  @media (max-width: 1000px) {
    padding: 6rem 9rem;
  }

  @media (max-width: 600px) {
    padding: 5rem;
  }

  @media (max-width: 420px) {
    padding: 3rem;
  }
`;

const ModalCard = styled(motion.div)`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: 999;
  flex: 1 1 auto;
  background: #fff;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1),
    0 10px min(calc(1rem * (15 / (20 + 0.167 * 0))), 15px) 0 rgba(0, 0, 0, 0.06);
  pointer-events: all;
  will-change: transform;
  padding: 2rem;
  border-radius: 1rem;
`;

const Overlay = styled(motion.div)`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background: linear-gradient(135deg, #70f, #40f);
`;

const items = [
  {
    id: "1",
    subtitle: "1",
    title: "1",
  },
  {
    id: "2",
    subtitle: "2",
    title: "2",
  },
  {
    id: "3",
    subtitle: "3",
    title: "3",
  },
  {
    id: "4",
    subtitle: "4",
    title: "4",
  },
];

const Modal = ({ id, onClick }: { id: string; onClick: () => void }) => {
  const findItem = items.find((item) => item.id === id);

  return (
    <>
      <ModalContainer
        className="modal__container"
        transition={{ duration: 0.5 }}
      >
        <ModalCard
          key={id}
          className="modal__modal"
          layoutId={id}
          transition={{ duration: 0.5 }}
        >
          <motion.h5>{findItem?.subtitle}</motion.h5>
          <motion.h2>{findItem?.title}</motion.h2>
        </ModalCard>
      </ModalContainer>
      <Overlay
        className="modal__overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        transition={{ duration: 0.2, delay: 0.2 }}
        onClick={onClick}
      />
    </>
  );
};

const InfoLayout = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <Container
      variants={{
        hidden: { opacity: 1 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
          },
        },
      }}
      initial="hidden"
      animate="show"
    >
      <AnimateSharedLayout>
        <Grid className="layout__grid">
          {items.map((item) => (
            <Item
              key={item.id}
              className="layout__item"
              layoutId={item.id}
              onClick={() => setSelectedId(item.id)}
              variants={{
                hidden: { y: 20, scale: 0 },
                show: {
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                  },
                },
              }}
            >
              <motion.h5>{item.subtitle}</motion.h5>
              <motion.h2>{item.title}</motion.h2>
            </Item>
          ))}
        </Grid>

        <AnimatePresence>
          {selectedId && (
            <Modal id={selectedId} onClick={() => setSelectedId(null)} />
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </Container>
  );
};

export default InfoLayout;
