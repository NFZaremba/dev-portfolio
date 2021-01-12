import clock from "../../img/clock.svg";
import diaphragm from "../../img/diaphragm.svg";
import money from "../../img/money.svg";
import teamwork from "../../img/teamwork.svg";
import home2 from "../../img/home2.png";
import { StyledDescription, StyledImage } from "../../styles/CommonStyles";
import { StyledServices, StyledCards, StyledCard } from "./Styles";

export interface ISection {
  img: string;
  title: string;
  paragraph: string;
}

export const sections: ISection[] = [
  {
    img: clock,
    title: "Efficient",
    paragraph: "Lorem ipsum dolor sit amet1.",
  },
  {
    img: diaphragm,
    title: "Diaphragm",
    paragraph: "Lorem ipsum dolor sit amet2.",
  },
  {
    img: money,
    title: "Affordable",
    paragraph: "Lorem ipsum dolor sit amet3.",
  },
  {
    img: teamwork,
    title: "Teamwork",
    paragraph: "Lorem ipsum dolor sit amet4.",
  },
];

const Services: React.FC = () => {
  return (
    <StyledServices data-testid="services-section">
      <StyledDescription>
        <h2 data-testid="services-title">
          High <span>quality</span> services
        </h2>
        <StyledCards>
          {sections.map(
            ({ img, title, paragraph }: ISection): React.ReactElement => (
              <StyledCard key={title} data-testid="services-card">
                <div className="icon">
                  <img src={img} alt={title.toLocaleLowerCase()} />
                  <h3>{title}</h3>
                </div>
                <p>{paragraph}</p>
              </StyledCard>
            )
          )}
        </StyledCards>
      </StyledDescription>
      <StyledImage>
        <img src={home2} alt="home2" />
      </StyledImage>
    </StyledServices>
  );
};

export default Services;
