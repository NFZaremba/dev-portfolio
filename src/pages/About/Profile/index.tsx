import {
  AnimatePresence,
  AnimateSharedLayout,
  motion,
  useAnimation,
} from "framer-motion";
import { forwardRef, useEffect, useRef, useState } from "react";
import { IBaseComponentPropsWithMotion } from "../../../shared/types";
import {
  Modal,
  ModalContainer,
  ProfileContainer,
  ModalOverlay,
  Icon,
  IconList,
  ProfileIcon,
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
  icon: string;
  text: string;
  overview: overviewType;
  offset: offsetType;
  color: string;
}

const profileData: IProfileData[] = [
  {
    id: "about",
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
  {
    id: "hobbies",
    icon: "award",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    overview: [],
    offset: {
      x: -220,
      y: 150,
      rotate: -60,
    },
    color: "#70f",
  },
];

// ======== Animations ======== //

const containerAnim = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const cardAnim = {
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
};

const iconAnim = {
  hidden: {
    x: 0,
    y: 0,
    opacity: 1,
  },
  show: ([position, index]: [offsetType, number]) => ({
    x: position.x,
    y: position.y,
    rotate: position.rotate,
    opacity: 1,
    transition: {
      delay: index * 0.3,
    },
  }),
};

// ======== Components ======== //

const SectionModal = ({ id, onClick }: { id: string; onClick: () => void }) => {
  const item = profileData.find((item) => item.id === id);
  return (
    <>
      <ModalContainer
        className="modal__container"
        transition={{ duration: 0.5 }}
      >
        <Modal
          key={id}
          className="modal"
          layoutId={id}
          animate={{ x: 0, y: 100 }}
          exit={{ x: item?.offset.x, y: item?.offset.y }}
          transition={{ duration: 0.5 }}
        />
      </ModalContainer>
      <ModalOverlay
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

interface ISectionIcon extends IBaseComponentPropsWithMotion {
  color: string;
  onClick: () => void;
  icon: string;
}

const SectionIcon = ({
  color,
  onClick,
  icon,
  layoutId,
  ...props
}: ISectionIcon) => {
  return (
    <Icon
      layoutId={layoutId}
      onClick={onClick}
      style={{ backgroundColor: color }}
      {...props}
    >
      <i className={`icon ri-${icon}-line`}></i>
    </Icon>
  );
};

const Profile = ({ inView }: { inView: boolean }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [animateList, setAnimateList] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    async function sequence() {
      setAnimateList(false);
      await animation.start({ x: -50, y: -50, opacity: 0 });
      await animation.start({
        scale: 1.5,
        opacity: 1,
        transition: { duration: 1.5 },
      });
      await animation.start({
        scale: 1,
        y: -200,
        transition: { duration: 0.7 },
      });
      setAnimateList(true);
    }
    sequence();
  }, [inView, animation]);

  return (
    <ProfileContainer
      className="profile-container"
      initial="hidden"
      animate="show"
    >
      <AnimateSharedLayout>
        <IconList>
          <ProfileIcon
            animate={animation}
            image={profile}
            className="profile-icon"
          />
          {profileData.map((itemData, index) => (
            <SectionIcon
              key={index}
              layoutId={itemData.id}
              color={itemData.color}
              onClick={() => setSelectedId(itemData.id)}
              icon={itemData.icon}
              custom={[itemData.offset, index]}
              variants={iconAnim}
              initial="hidden"
              animate={animateList ? "show" : "hidden"}
            />
          ))}
        </IconList>

        <AnimatePresence>
          {selectedId && (
            <SectionModal id={selectedId} onClick={() => setSelectedId(null)} />
          )}
        </AnimatePresence>
      </AnimateSharedLayout>

      {/* <AnimateSharedLayout>
        <Layout className="layout__grid" variants={containerAnim}>
          <Card
            key="profile-avatar"
            className="layout__item"
            layoutId="profile-avatar"
            onClick={() => setSelectedId("profile-avatar")}
            variants={cardAnim}
          >
            <CardOverlay
              className="card__overlay"
              header="'Profile'"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
              transition={{ duration: 0.2, delay: 0.2 }}
            />
          </Card>
        </Layout>

        <AnimatePresence>
          {selectedId && (
            <SectionModal id={selectedId} onClick={() => setSelectedId(null)} />
          )}
        </AnimatePresence>
      </AnimateSharedLayout> */}
    </ProfileContainer>
  );
};
export default Profile;
