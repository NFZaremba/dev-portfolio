import { Link } from "react-router-dom";
import athlete from "../../img/athlete-small.png";
import theracer from "../../img/theracer-small.png";
import goodtimes from "../../img/goodtimes-small.png";
import { StyledWork, StyledProject } from "./Styles";

// TODO: change to include personal projects

export interface IProject {
  title: string;
  img: string;
  path: string;
  alt: string;
}

export const projects = [
  {
    title: "The Athlete",
    img: athlete,
    path: "/",
    alt: "athlete",
  },
  {
    title: "The Racer",
    img: theracer,
    path: "/",
    alt: "racer",
  },
  {
    title: "Good Times",
    img: goodtimes,
    path: "/",
    alt: "good-times",
  },
];

const MyWork = () => {
  return (
    <StyledWork data-testid="mywork-section">
      {projects?.map(({ title, img, path, alt }) => (
        <StyledProject>
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
