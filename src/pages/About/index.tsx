import {
  AnimatePresence,
  AnimateSharedLayout,
  useAnimation,
} from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { PageSlider } from "../../components";
import {
  fullpageAnimation,
  contentAnim,
  titleAnim,
} from "../../shared/animation";
import { useScroll } from "../../utils";
import ProfileCard from "./Profile/Card";
import Profile from "./Profile";
import { profileData } from "./__data__";
import profile from "../../assets/img/profile.png";

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

const About = () => {
  const [ref, controls, inView] = useScroll();
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
        transition: { duration: 0.5 },
      });
      await animation.start({
        scale: 1,
        transition: { duration: 0.5 },
      });
      await animation.start({
        top: 0,
        left: 0,
        transition: { duration: 0.5 },
      });
      setAnimateList(true);
    }
    if (inView) {
      sequence();
    }
  }, [inView, animation]);

  const getItem = useCallback(
    (id: string) => profileData.find((item) => item.id === id),
    []
  );

  return (
    <PageSlider
      ref={ref}
      variants={fullpageAnimation}
      initial="hidden"
      animate={controls}
    >
      <PageSlider.Title>
        <PageSlider.Header variants={titleAnim}>Profile</PageSlider.Header>
        <PageSlider.SubHeader variants={titleAnim}>
          Software Developer
        </PageSlider.SubHeader>
      </PageSlider.Title>
      <PageSlider.Content
        animate={controls}
        initial="hidden"
        variants={contentAnim}
      >
        {/* <Profile profileData={profileData} inView={inView} /> */}
        <Profile>
          <AnimateSharedLayout>
            <Profile.Layout>
              <Profile.Icon
                animate={animation}
                image={profile}
                className="profile-icon layout__item"
              />
              {profileData.map(({ id, title }, index) => (
                <ProfileCard
                  id={id}
                  key={id}
                  className="layout__item"
                  layoutId={`container-${id}`}
                  onClick={() => setSelectedId(id)}
                  variants={cardAnim}
                  custom={index}
                  initial="hidden"
                  animate={animateList ? "show" : "hidden"}
                >
                  <ProfileCard.Header layout layoutId={`title-${id}`}>
                    <h3>{title}</h3>
                  </ProfileCard.Header>
                </ProfileCard>
              ))}
            </Profile.Layout>

            <AnimatePresence>
              {selectedId && (
                <ProfileCard.Expanded
                  item={getItem(selectedId)}
                  onClick={() => setSelectedId(null)}
                />
              )}
            </AnimatePresence>
          </AnimateSharedLayout>
        </Profile>
      </PageSlider.Content>
    </PageSlider>
  );
};

export default About;
