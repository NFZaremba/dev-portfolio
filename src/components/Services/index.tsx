import home2 from "../../img/home2.png";
import { StyledDescription, StyledImage } from "../../styles/CommonStyles";
import { StyledServices, StyledCards, StyledCard } from "./Styles";
import { sections, ISection } from "./__data__/serviceSections";

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
