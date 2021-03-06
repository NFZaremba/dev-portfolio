import home2 from "../../assets/img/home2.png";
import { CommonDescription, Image } from "../../shared/CommonStyles";
import { StyledServices, StyledCards, StyledCard } from "./Styles";
import { sections, ISection } from "./serviceSections";
// Animation
import { scrollFade } from "../../shared/animation";
// Hooks
import { useScroll } from "../../hooks";

const Services: React.FC = () => {
  const [ref, controls] = useScroll();
  return (
    <StyledServices
      variants={scrollFade}
      animate={controls}
      initial="hidden"
      ref={ref}
      data-testid="services-section"
    >
      <CommonDescription>
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
      </CommonDescription>
      <Image>
        <img src={home2} alt="home2" />
      </Image>
    </StyledServices>
  );
};

export default Services;
