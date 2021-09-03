export interface IProfileData {
  id: string;
  title: string;
  list: string[];
}

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
