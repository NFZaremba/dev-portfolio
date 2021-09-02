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
  ListItem,
} from "./styles";
import profile from "../../../assets/img/profile.png";

// ======== Data ======== //

interface IProfileData {
  id: string;
  title: string;
  list: string[];
}

const profileData: IProfileData[] = [
  {
    id: "about",
    title: "About",
    list: [
      "Love for programming",
      "lives in Seattle",
      "specialize in fron-end tech",
    ],
  },
  {
    id: "experience",
    title: "Experience",
    list: [
      "Hostwinds - Lead Engineer/Architect",
      "QCM Media - React Developer",
      "Network for Justice - Full Stack Developer",
    ],
  },
  {
    id: "skills",
    title: "Skills",
    list: [
      "HTML/CSS/SASS",
      "JavaScript",
      "React",
      "TypeScript",
      "Node",
      "SEO",
      "Jest/React-Testing-Library/Cypress",
      "Adobe Creative",
    ],
  },
];

// ======== Animations ======== //

const cardAnim = {
  hidden: {
    width: "0%",
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  show: (index: number) => ({
    opacity: 1,
    width: "100%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      delay: index * 0.3,
    },
  }),
};

// ======== Components ======== //

const Modal = ({ id, onClick }: { id: string; onClick: () => void }) => {
  const item = profileData.find((item) => item.id === id);
  return (
    <>
      <CardExpandedContainer className="expanded__container ">
        <CardExpanded
          key={id}
          className="expanded-card open"
          layoutId={`container-${id}`}
        >
          <CardContent
            className="expanded-card__content"
            layoutId={`content-${id}`}
            style={{ height: "22%" }}
          />
          <CardTitle
            className="expanded-card__title open"
            layoutId={`title-${id}`}
            layout
          >
            <h3>{item?.title}</h3>
          </CardTitle>
          <CardText animate>
            <div>
              {item?.list.map((text) => (
                <ListItem>
                  <i className="ri-checkbox-circle-fill"></i>
                  <p>{text}</p>
                </ListItem>
              ))}
            </div>
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
  const [animateList, setAnimateList] = useState<boolean>(false);
  const animation = useAnimation();

  useEffect(() => {
    if (!inView) {
      animation.stop();
      setSelectedId(null);
      setAnimateList(false);
    }

    async function sequence() {
      setAnimateList(false);
      await animation.start({
        top: "50%",
        left: "125%",
        scale: 0.5,
        opacity: 0,
      });
      await animation.start({
        scale: 1.5,
        opacity: 1,
        transition: { duration: 0.9 },
      });
      await animation.start({
        scale: 1,
        transition: { duration: 0.7 },
      });
      await animation.start({
        top: 0,
        left: 0,
        transition: { duration: 0.7 },
      });
      setAnimateList(true);
    }
    if (inView) {
      sequence();
    }
  }, [inView, animation]);

  return (
    <ProfileContainer className="profile-container">
      <AnimateSharedLayout>
        <Layout className="layout__grid">
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
