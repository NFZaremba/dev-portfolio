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
            <div className="flex flex-wrap pt-4">
              {profile.list.map((item) => (
                <div key={item} className="flex flex-1 flex-grow-0 w-40">
                  <i className="ri-checkbox-circle-fill text-green-400 mb-1 mr-1"></i>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </PageSlider.Left>
        <PageSlider.Right>
          <AnimateSharedLayout>
            <ul className="w-full shadow-inner h-full rounded-3xl bg-gray-600 flex flex-col justify-center items-center">
              {profileData.map((data, i) => {
                const isSelected = selected === colors[i];
                return (
                  <motion.li
                    key={data.id}
                    className="block w-48 lg:w-72 h-28 rounded-3xl shadow-xl m-4 lg:m-7 relative cursor-pointer flex-shrink-0"
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
    </PageSlider>
  );
};

export default About;
