import { Link } from "react-router-dom";
import { projects } from "../../shared/projects";
import { StyledWork, StyledProject } from "./Styles";

const MyWork = () => {
  return (
    <StyledWork data-testid="mywork-section">
      {projects?.map(({ title, mainImg, id, subTitle, techStack }) => (
        <StyledProject key={title}>
          <h2>{title}</h2>
          <h4>{subTitle}</h4>
          {techStack?.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
          <div className="line"></div>
          <Link to={`work/${id}`}>
            <img src={mainImg.src} alt={mainImg.alt} />
          </Link>
        </StyledProject>
      ))}
    </StyledWork>
  );
};

export default MyWork;
