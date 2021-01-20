import { Link } from "react-router-dom";
// Data
import { projects } from "../../shared/projects";
// Styles
import { WorkSection, Project, TechList } from "./Styles";
// Animation
import { pageAnimation } from "../../shared/animation";

const MyWork = () => {
  return (
    <WorkSection
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      data-testid="mywork-section"
    >
      {projects?.map(({ title, mainImg, id, subTitle, techStack }) => (
        <Project key={title}>
          <h2>{title}</h2>
          <h4>{subTitle}</h4>
          <TechList>
            {techStack?.map((tech) => (
              <div className="tech-item" key={tech}>
                {tech}
              </div>
            ))}
          </TechList>
          <div className="line"></div>
          <Link to={`work/${id}`}>
            <img src={mainImg.src} alt={mainImg.alt} />
          </Link>
        </Project>
      ))}
    </WorkSection>
  );
};

export default MyWork;
