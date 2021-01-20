import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IProject, projects } from "../../shared/projects";
import { Details, HeadLine, Description } from "./Styles";

const ProjectDetails: React.FC = () => {
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
    <Details data-testid="project-details-section">
      <HeadLine>
        <h2>{currentProject?.title}</h2>
        <img
          src={currentProject?.mainImg.src}
          alt={currentProject?.mainImg.alt}
        />
      </HeadLine>
      <Description>
        <p>{currentProject?.description}</p>
      </Description>
    </Details>
  );
};

export default ProjectDetails;
