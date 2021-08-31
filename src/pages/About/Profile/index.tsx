import {
  AnimatePresence,
  AnimateSharedLayout,
  motion,
  useAnimation,
} from "framer-motion";
import { useEffect, useState } from "react";
import {
  CardExpanded,
  CardExpandedContainer,
  ProfileContainer,
  Overlay,
  ProfileIcon,
  Layout,
  CardContainer,
  CardText,
  CardTitle,
  CardContent,
} from "./styles";
import profile from "../../../assets/img/profile.png";

// ======== Data ======== //

type overviewType = String[];

type offsetType = {
  x: number;
  y: number;
  rotate?: number;
};

interface IProfileData {
  id: string;
  title: string;
  icon: string;
  text: string;
  overview: overviewType;
  offset: offsetType;
  color: string;
}

const profileData: IProfileData[] = [
  {
    id: "about",
    title: "About",
    icon: "earth",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    overview: [],
    offset: {
      x: 150,
      y: 150,
      rotate: 20,
    },
    color: "#f08",
  },
  {
    id: "skills",
    title: "Skills",
    icon: "home",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    overview: [],
    offset: {
      x: 50,
      y: 150,
      rotate: 60,
    },
    color: "#d0e",
  },
  {
    id: "experience",
    title: "Experience",
    icon: "stack",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    overview: [],
    offset: {
      x: -120,
      y: 150,
      rotate: -20,
    },
    color: "#91f",
  },
  // {
  //   id: "hobbies",
  //   title: "Hobbies",
  //   icon: "award",
  //   text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
  //   overview: [],
  //   offset: {
  //     x: -220,
  //     y: 150,
  //     rotate: -60,
  //   },
  //   color: "#70f",
  // },
];

// ======== Animations ======== //

// const containerAnim = {
//   hidden: { opacity: 1 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.3,
//     },
//   },
// };

const cardAnim = {
  hidden: {
    // top: 1000,
    // scale: 0,
    width: "0%",
    transition: {
      duration: 1,
    },
  },
  show: (index: number) => ({
    // scale: 1,
    // top: 0,
    width: "100%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      delay: index * 0.3,
    },
  }),
};

const modalTextAnim = {
  hidden: {
    opacity: 0,
    transiition: {
      delay: 0.2,
    },
  },
  show: {
    opacity: 1,
    transiition: {
      delay: 0.2,
    },
  },
};

// ======== Components ======== //

const Modal = ({ id, onClick }: { id: string; onClick: () => void }) => {
  const item = profileData.find((item) => item.id === id);
  return (
    <>
      <CardExpandedContainer
        className="expanded__container "
        // transition={{ duration: 0.5 }}
      >
        <CardExpanded
          key={id}
          className="expanded-card open"
          layoutId={`container-${id}`}
        >
          <CardContent
            className="expanded-card__content"
            layoutId={`content-${id}`}
            style={{ height: "22%" }}
          ></CardContent>
          <CardTitle
            className="expanded-card__title open"
            layoutId={`title-${id}`}
            layout
            // transition={{ duration: 0.4 }}
          >
            <h3>{item?.title}</h3>
          </CardTitle>
          <CardText
            // variants={modalTextAnim}
            // initial="hidden"
            // animate="show"
            // exit="show"
            animate
          >
            <p>{item?.text}</p>
          </CardText>
        </CardExpanded>
      </CardExpandedContainer>
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

const Profile = ({ inView }: { inView: boolean }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [animateList, setAnimateList] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    async function sequence() {
      setAnimateList(false);
      // await animation.start({ x: -50, y: -50, opacity: 0 });
      await animation.start({
        scale: 1.5,
        opacity: 1,
        transition: { duration: 1.5 },
      });
      await animation.start({
        scale: 1,
        transition: { duration: 0.7 },
      });
      setAnimateList(true);
    }
    sequence();
  }, [inView, animation]);

  useEffect(() => {
    // close modal when not in view
    if (!inView) {
      setSelectedId(null);
    }
  }, [inView]);

  return (
    <ProfileContainer className="profile-container">
      <AnimateSharedLayout>
        <Layout
          className="layout__grid"
          // variants={containerAnim}
          // initial="hidden"
          // animate={animateList ? "show" : "hidden"}
        >
          <ProfileIcon
            animate={animation}
            image={profile}
            className="profile-icon layout__item"
          />
          {profileData.map(({ id, title }, index) => (
            <CardContainer
              key={id}
              className="layout__item"
              layoutId={`container-${id}`}
              onClick={() => setSelectedId(id)}
              variants={cardAnim}
              custom={index}
              initial="hidden"
              animate={animateList ? "show" : "hidden"}
            >
              <CardContent layoutId={`content-${id}`}></CardContent>
              <CardTitle layout layoutId={`title-${id}`}>
                <h3>{title}</h3>
              </CardTitle>
              {/* <CardOverlay
                className="card__overlay"
                header={`'${title}'`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
                transition={{ duration: 0.2, delay: 0.2 }}
              /> */}
            </CardContainer>
          ))}
        </Layout>

        <AnimatePresence>
          {selectedId && (
            <Modal id={selectedId} onClick={() => setSelectedId(null)} />
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </ProfileContainer>
  );
};
export default Profile;
