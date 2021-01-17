import { Link } from "react-router-dom";
import { projects } from "./__data__/projects";
import { StyledWork, StyledProject } from "./Styles";

const MyWork = () => {
  return (
    <StyledWork data-testid="mywork-section">
      {projects?.map(({ title, img, path, alt }) => (
        <StyledProject key={title}>
          <h2>{title}</h2>
          <div className="line"></div>
          <Link to={path}>
            <img src={img} alt={alt} />
          </Link>
        </StyledProject>
      ))}
    </StyledWork>
  );
};

export default MyWork;
