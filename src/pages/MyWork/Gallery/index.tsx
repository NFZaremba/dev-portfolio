import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { wrap } from "@popmotion/popcorn";
import { IProject } from "../types";
import { AnimatePresence } from "framer-motion";
import { IBaseComponentPropsWithMotion } from "../../../shared/types";
import classnames from "classnames";
import { swipePower } from "../../../shared/utils";
import {
  Preview,
  Content,
  Controls,
  Header,
  Indicator,
  Next,
  Prev,
  Image,
  Container,
  ExternalLink,
} from "./styles";

export interface IGalleryProps {
  children: React.ReactNode;
  projects: IProject[];
  controls?: boolean;
}

export interface IGalleryContext {
  projects: IProject[];
  project: IProject;
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

//* Animations
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

//* Context
const GalleryContext = createContext<IGalleryContext | undefined>(undefined);

const useGalleryContext = () => {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error(
      `Gallery compound components cannot be rendered outside the Gallery component`
    );
  }
  return context;
};

const Gallery = ({ children, projects, controls = true }: IGalleryProps) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [project, setProject] = useState(projects[0]);

  useEffect(() => {
    const index = wrap(0, projects.length, page);
    setProject(projects[index]);
  }, [page, projects, direction]);

  const paginate = useCallback(
    (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
    },
    [page]
  );

  const value = useMemo(
    () => ({ page, direction, setPage, project, paginate, projects }),
    [page, direction, setPage, project, paginate, projects]
  );

  const renderIndicators = useMemo(
    () =>
      projects.map(
        ({ id }): JSX.Element => (
          <Indicator
            key={`page-${id}`}
            className="page-indicator"
            animate={{
              opacity: project.id === id ? 1 : 0.3,
            }}
          />
        )
      ),
    [projects, project]
  );

  return (
    <GalleryContext.Provider value={value}>
      <Container>
        {children}
        {controls ? (
          <Controls>
            <Prev onClick={() => paginate(1)}>
              <i className="ri-arrow-left-s-fill"></i>
            </Prev>
            {renderIndicators}
            <Next className="next" onClick={() => paginate(-1)}>
              <i className="ri-arrow-right-s-fill"></i>
            </Next>
          </Controls>
        ) : null}
      </Container>
    </GalleryContext.Provider>
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
        image={context.project.image}
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
        onDragEnd={(_e, { offset, velocity }) => {
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

const GalleryContent = ({
  children,
  classes,
  ...props
}: IGalleryContentProps) => {
  const context = useGalleryContext();
  return (
    <Content {...props} className={classnames("Gallery__content", classes)}>
      <Header>{context.project.title}</Header>
      <Preview>{context.project.description}</Preview>
      <div
        style={{
          display: "flex",
        }}
      >
        <ExternalLink
          href={context.project.links[0].url}
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="ri-github-line"></i>
          Github
        </ExternalLink>
        <ExternalLink
          href={context.project.links[1].url}
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="ri-global-line"></i>
          Website
        </ExternalLink>
      </div>
    </Content>
  );
};

Gallery.Image = GalleryImage;
Gallery.Content = GalleryContent;

export default Gallery;
