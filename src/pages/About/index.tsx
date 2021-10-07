// import {
//   AnimatePresence,
//   AnimateSharedLayout,
//   motion,
//   useAnimation,
// } from "framer-motion";
// import { useCallback, useEffect, useState } from "react";
// import { PageSlider } from "../../components";
// import {
//   fullpageAnimation,
//   contentAnim,
//   titleAnim,
// } from "../../shared/animation";
// import { useScroll } from "../../utils";
// import ProfileCard from "./Profile/Card";
// import Profile from "./Profile";
// import { profileData } from "./__data__";
// import profile from "../../assets/img/profile.png";

// const cardAnim = {
//   hidden: {
//     width: 0,
//     opacity: 0,
//     transition: {
//       duration: 0.1,
//     },
//   },
//   show: (index: number) => ({
//     opacity: 1,
//     width: "100%",
//     transition: {
//       type: "spring",
//       stiffness: 300,
//       damping: 20,
//       delay: index * 0.3,
//     },
//   }),
// };

// const About = () => {
//   const [ref, controls, inView] = useScroll();
//   const [selectedId, setSelectedId] = useState<string | null>(null);
//   const [animateList, setAnimateList] = useState<boolean>(false);
//   const animation = useAnimation();
//   const animationList = useAnimation();

//   useEffect(() => {
//     // if (!inView) {
//     //   animation.stop();
//     //   animationList.stop();
//     //   setSelectedId(null);
//     //   // setAnimateList(false);
//     // }

//     async function sequence() {
//       // setAnimateList(false);

//       await animation.start({
//         top: "50%",
//         left: "125%",
//         scale: 0.5,
//         opacity: 0,
//       });
//       console.log("first");
//       await animation.start({
//         scale: 1.5,
//         opacity: 1,
//         transition: { duration: 0.5 },
//       });
//       console.log("second");
//       await animation.start({
//         scale: 1,
//         transition: { duration: 0.5 },
//       });
//       console.log("third");
//       await animation.start({
//         top: 0,
//         left: 0,
//         transition: { duration: 0.5 },
//       });
//       console.log("final");
//       return await animationList.start("show");
//       // setAnimateList(true);
//     }
//     if (inView) {
//       sequence();
//     }
//     // return () => {
//     //   animation.stop();
//     //   setSelectedId(null);
//     //   setAnimateList(false);
//     // };

//     return () => {
//       console.log("test");
//       animation.stop();
//       animationList.start("hidden");
//       setSelectedId(null);
//       // setAnimateList(false);
//     };
//   }, [inView, animation, animationList]);

//   const getItem = useCallback(
//     (id: string) => profileData.find((item) => item.id === id),
//     []
//   );

//   return (
//     <PageSlider
//       ref={ref}
//       variants={fullpageAnimation}
//       initial="hidden"
//       animate={controls}
//     >
//       <PageSlider.Title>
//         <PageSlider.Header variants={titleAnim}>Profile</PageSlider.Header>
//         <PageSlider.SubHeader variants={titleAnim}>
//           Software Developer
//         </PageSlider.SubHeader>
//       </PageSlider.Title>
//       <PageSlider.Content variants={contentAnim}>
// <Profile>
// <AnimateSharedLayout>
// <Profile.Layout>
// <Profile.Icon
// animate={animation}
// image={profile}
// className="profile-icon layout__item"
// />
// {profileData.map(({ id, title }, index) => (
// <ProfileCard
// id={id}
// key={id}
// className="layout__item"
// onClick={() => setSelectedId(id)}
// variants={cardAnim}
// custom={index}
// animate={animationList}
// >
// <ProfileCard.Header layout layoutId={`title-${id}`}>
// <h3>{title}</h3>
// </ProfileCard.Header>
// </ProfileCard>
// ))}
// </Profile.Layout>
//
// <AnimatePresence>
// {selectedId && (
// <ProfileCard.Expanded
// item={getItem(selectedId)}
// onClick={() => setSelectedId(null)}
// />
// )
// </AnimatePresence>
// </AnimateSharedLayout>
// </Profile>
//       </PageSlider.Content>
//     </PageSlider>
//   );
// };

// export default About;

import { Dispatch, useEffect, useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import { PageSlider } from "../../shared/components";
import { fullpageAnimation, contentAnim } from "../../shared/animation";
import { useScroll } from "../../shared/utils";
import { IProfileData } from "./types";

export const profileData: IProfileData[] = [
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

const colors = ["#8B5CF6", "#10B981", "#EC4899"];

export interface IAbout {
  setSectionTitle: Dispatch<string>;
}

const About = ({ setSectionTitle }: IAbout) => {
  const [ref, controls, inView] = useScroll();
  const [profile, setProfileData] = useState(profileData[0]);
  const [selected, setSelected] = useState(colors[0]);

  useEffect(() => {
    if (inView) {
      console.log("about");
      setSectionTitle("Profile");
    }
  }, [setSectionTitle, inView]);

  return (
    <PageSlider
      ref={ref}
      variants={fullpageAnimation}
      initial="hidden"
      animate={controls}
    >
      <PageSlider.Content animate={controls} variants={contentAnim}>
        <PageSlider.Left>
          <PageSlider.Header>Most Recent Work</PageSlider.Header>
          <div className="p-4 text-lg font-medium w-full divide-y">
            <h1 className="pb-4 text-blue-600">{profile.title} </h1>
            <div className="flex flex-col pt-4">
              {profile.list.map((item) => (
                <div key={item} className="flex">
                  <i className="ri-checkbox-circle-fill text-green-400 mb-1 mr-1"></i>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </PageSlider.Left>
        <PageSlider.Right>
          <AnimateSharedLayout>
            <ul className="w-full h-full rounded-3xl bg-gray-600 flex flex-col justify-center items-center">
              {profileData.map((data, i) => {
                const isSelected = selected === colors[i];
                return (
                  <motion.li
                    key={data.id}
                    className="block w-72 h-28 rounded-3xl shadow-xl m-7 relative cursor-pointer flex-shrink-0"
                    onClick={() => {
                      setSelected(colors[i]);
                      setProfileData(data);
                    }}
                    style={{ backgroundColor: colors[i] }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <h3 className="text-2xl flex items-center justify-center w-full h-full">
                      {data.title}
                    </h3>
                    {isSelected && (
                      <motion.div
                        layoutId="outline"
                        className="absolute -top-2 -bottom-2 -left-2 -right-2 border-4 border-white rounded-3xl"
                        initial={false}
                        animate={{ borderColor: colors[i] }}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.li>
                );
              })}
            </ul>
          </AnimateSharedLayout>
        </PageSlider.Right>
      </PageSlider.Content>
      {/* <PageSlider.Title>
        <PageSlider.Header variants={titleAnim}>Profile</PageSlider.Header>
        <PageSlider.SubHeader variants={titleAnim}>
          Software Developer
        </PageSlider.SubHeader>
      </PageSlider.Title> */}
    </PageSlider>
  );
};

export default About;
