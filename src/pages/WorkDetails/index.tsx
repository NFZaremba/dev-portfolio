import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../Home/MyWork";
import { IProject } from "../Home/MyWork/types";
import { Details, HeadLine, Description } from "./Styles";
import { pageAnimation } from "../../shared/animation";

const WorkDetails: React.FC = () => {
  const { id } = useParams<Record<string, string>>();
  const [myProjects, setProjects] = useState<Array<IProject>>();
  const [currentProject, setCurrentProject] = useState<IProject>();

  useEffect(() => {
    setProjects(projects);
  }, []);

  useEffect(() => {
    if (myProjects) {
      setCurrentProject(myProjects?.find((project) => project.id === id));
    }
  }, [myProjects, id]);

  if (!myProjects) return null;

  return (
    <Details
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      data-testid="project-details-section"
    >
      <HeadLine>
        <h2>{currentProject?.title}</h2>
        <img src={currentProject?.image.src} alt={currentProject?.image.alt} />
      </HeadLine>
      <Description>
        <p>{currentProject?.description}</p>
      </Description>
    </Details>
  );
};

export default WorkDetails;
