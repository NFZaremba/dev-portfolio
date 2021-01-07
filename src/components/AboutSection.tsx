import home1 from "../img/home1.png";
import styled from "styled-components";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>Passionate software developer</h2>
          </div>
          <div className="hide">
            <h2>
              who <span>loves</span>
            </h2>
          </div>
          <div className="hide">
            <h2>expanding personal growth.</h2>
          </div>
        </div>
        <p>
          Supportive, enthusiastic team player and leader looking for an
          environment where I may grow and contribute my professional skills and
          passion in engineering to the group’s objective.
        </p>
        <button>Contact Us</button>
      </div>
      <div className="image">
        <img src={home1} alt="guy with camera" />
      </div>
    </div>
  );
};

// styles
const About = styled.div``;

export default AboutSection;
