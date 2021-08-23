import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { wrap } from "@popmotion/popcorn";
import { IProject } from "../../pages/MyWork/types";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { IBaseComponentPropsWithMotion, Img } from "../../shared/types";
import classnames from "classnames";
import { swipePower } from "../../utils";
import { cardVariants } from "./animations";
import Button from "../Button";

export interface IGalleryProps {
  children: React.ReactNode;
  projects: IProject[];
}

export interface IGalleryContext {
  projects: IProject[];
  imageIndex: number;
  page: number;
  paginate: (arg: number) => void;
  direction: number;
}

export interface IGalleryImageProps extends IBaseComponentPropsWithMotion {
  swipeThreshold: number;
}

export type IGalleryContentProps = IBaseComponentPropsWithMotion;

export type IGalleryHeaderProps = IBaseComponentPropsWithMotion;

export type IGalleryBodyProps = IBaseComponentPropsWithMotion;

//* Styles
const Container = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Controls = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  left: 50%;
  margin: auto;
  transform: translate(-50%, -50%);
  bottom: -12px;

  @media (max-width: 800px) {
    bottom: -18px;
  }

  @media (max-width: 420px) {
    bottom: -30px;
  }
`;

const Indicator = styled(motion.div)`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #c1b;
  flex: 1;
  margin: 0.5rem;
  opacity: 0.3;
`;

const Prev = styled(motion.div)`
  display: flex;
  cursor: pointer;
  margin: 0.5rem;
  flex: 1;
  &:hover {
    background: hsl(0deg 0% 29% / 21%);
    box-shadow: 0 0px 15px -6px rgb(255 255 255 / 40%);
    transition: 0.4s;
  }
  i {
    color: #fff;
    font-size: 2.1rem;
  }
`;

const Next = styled(Prev)``;

const Image = styled(motion.div)<{ image: Img }>`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  background-size: cover;
  background-image: url(${(props) => props.image.src});
  border-radius: 1rem;
  height: 90%;
  width: 100%;
  border: solid 2px #c1b;
`;

const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  padding: 1.5em;
  border-radius: 1rem;
  background: linear-gradient(
    hsl(0 0% 0% / 0),
    hsl(20 0% 0% / 0.3) 20%,
    hsl(0 0% 0% / 1)
  );
`;

const Header = styled(motion.h2)`
  font-size: 3em;

  @media (max-width: 800px) {
    font-size: 2em;
  }
`;

const Body = styled(motion.p)`
  padding-bottom: 3em;
`;

const GalleryContext = createContext<IGalleryContext | undefined>(undefined);

const useGalleryContext = () => {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error(
      `Toggle compound components cannot be rendered outside the Toggle component`
    );
  }
  return context;
};

const Gallery = ({ children, projects }: IGalleryProps) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setImageIndex(wrap(0, projects.length, page));
  }, [page, projects, direction]);

  const paginate = useCallback(
    (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
    },
    [page]
  );

  const value = useMemo(
    () => ({ page, direction, setPage, imageIndex, paginate, projects }),
    [page, direction, setPage, imageIndex, paginate, projects]
  );

  return (
    <GalleryContext.Provider value={value}>
      <Container>{children}</Container>
    </GalleryContext.Provider>
  );
};

const GalleryControls = () => {
  const context = useGalleryContext();

  return (
    <Controls>
      <Prev onClick={() => context.paginate(1)}>
        <i className="ri-arrow-left-s-fill"></i>
      </Prev>
      {context.projects.map(
        (_, index: number): JSX.Element => (
          <Indicator
            key={`page-${index}`}
            className="page-indicator"
            animate={{
              opacity: context.imageIndex === index ? 1 : 0.3,
            }}
          />
        )
      )}
      <Next className="next" onClick={() => context.paginate(-1)}>
        <i className="ri-arrow-right-s-fill"></i>
      </Next>
    </Controls>
  );
};

const GalleryImage = ({
  children,
  classes,
  swipeThreshold = 10000,
}: IGalleryImageProps): JSX.Element => {
  const context = useGalleryContext();
  return (
    <AnimatePresence initial={false} custom={context.direction}>
      <Image
        key={context.page}
        image={context.projects[context.imageIndex].image}
        custom={context.direction}
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

          if (swipe < -swipeThreshold) {
            context.paginate(1);
          } else if (swipe > swipeThreshold) {
            context.paginate(-1);
          }
        }}
        className={classnames("Gallery", classes)}
      >
        {children}
      </Image>
    </AnimatePresence>
  );
};

const GalleryHeader = ({
  children,
  classes,
  ...props
}: IGalleryHeaderProps) => {
  return (
    <Header {...props} className={classnames("Gallery__header", classes)}>
      {children}
    </Header>
  );
};

const GalleryBody = ({ children, classes, ...props }: IGalleryBodyProps) => {
  return (
    <Body {...props} className={classnames("Gallery__body", classes)}>
      {children}
    </Body>
  );
};

const GalleryContent = ({
  children,
  classes,
  ...props
}: IGalleryContentProps) => {
  const context = useGalleryContext();
  return (
    <Content {...props} className={classnames("Gallery__content", classes)}>
      <GalleryHeader>
        {context.projects[context.imageIndex].title}
      </GalleryHeader>
      <GalleryBody>{context.projects[context.imageIndex].preview}</GalleryBody>
      <Button onClick={() => {}}>GitHub</Button>
      <Button onClick={() => {}}>WebSite</Button>
    </Content>
  );
};

Gallery.Image = GalleryImage;
Gallery.Header = GalleryHeader;
Gallery.Body = GalleryBody;
Gallery.Content = GalleryContent;
Gallery.Controls = GalleryControls;

export default Gallery;
