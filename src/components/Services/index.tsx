import clock from "../../img/clock.svg";
import diaphragm from "../../img/diaphragm.svg";
import money from "../../img/money.svg";
import teamwork from "../../img/teamwork.svg";
import home2 from "../../img/home2.png";
import { StyledDescription, StyledImage } from "../../styles/CommonStyles";
import { StyledServices, StyledCards, StyledCard } from "./Styles";

const sections = [
  {
    img: clock,
    title: "Efficient",
    paragraph: "Lorem ipsum dolor sit amet.",
  },
  {
    img: diaphragm,
    title: "Diaphragm",
    paragraph: "Lorem ipsum dolor sit amet.",
  },
  {
    img: money,
    title: "Affordable",
    paragraph: "Lorem ipsum dolor sit amet.",
  },
  {
    img: teamwork,
    title: "Teamwork",
    paragraph: "Lorem ipsum dolor sit amet.",
  },
];

const Services = () => {
  return (
    <StyledServices data-testid="services-section">
      <StyledDescription data-testid="services-description">
        <h2>
          High <span>quality</span> services
        </h2>
        <StyledCards>
          {sections.map((section) => (
            <StyledCard>
              <div className="icon">
                <img
                  src={section.img}
                  alt={section.title.toLocaleLowerCase()}
                />
                <h3>{section.title}</h3>
              </div>
              <p>{section.paragraph}</p>
            </StyledCard>
          ))}
        </StyledCards>
      </StyledDescription>
      <StyledImage>
        <img src={home2} alt="home2" />
      </StyledImage>
    </StyledServices>
  );
};

export default Services;
