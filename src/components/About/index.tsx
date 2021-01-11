import home1 from "../../img/home1.png";
import {
  StyledImage,
  StyledAbout,
  StyledDescription,
  Hide,
} from "../../styles/CommonStyles";

const About = () => {
  return (
    <StyledAbout>
      <StyledDescription data-testid="about-section">
        <div className="title" data-testid="about-title">
          <Hide>
            <h2>Passionate software developer</h2>
          </Hide>
          <Hide>
            <h2>
              who <span>loves</span> expanding
            </h2>
          </Hide>
          <Hide>
            <h2>personal growth.</h2>
          </Hide>
        </div>
        <p>
          Supportive, enthusiastic team player and leader looking for an
          environment where I may grow and contribute my professional skills and
          passion in engineering to the group’s objective.
        </p>
        <button>Contact Us</button>
      </StyledDescription>
      <StyledImage>
        <img src={home1} alt="guy with camera" data-testid="about-image" />
      </StyledImage>
    </StyledAbout>
  );
};

export default About;
