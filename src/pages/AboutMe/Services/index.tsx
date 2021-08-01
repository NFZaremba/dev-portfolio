import home2 from "../../../assets/img/home2.png";
import { StyledServices, StyledCards, StyledCard } from "./Styles";
import { scrollFade } from "../../../shared/animation";
import { useScroll } from "../../../hooks";

import clock from "../../../assets/img/clock.svg";
import diaphragm from "../../../assets/img/diaphragm.svg";
import money from "../../../assets/img/money.svg";
import teamwork from "../../../assets/img/teamwork.svg";

export interface IService {
  img: string;
  title: string;
  paragraph: string;
}

export const services: IService[] = [
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
  const [ref, controls] = useScroll();
  return (
    <StyledServices
      variants={scrollFade}
      animate={controls}
      initial="hidden"
      ref={ref}
      data-testid="services-section"
    >
      {/* <Description>
        <h2 data-testid="services-title">
          High <span>quality</span> services
        </h2>
        <StyledCards>
          {services.map(
            ({ img, title, paragraph }: IService): React.ReactElement => (
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
      </Description>
      <Image>
        <img src={home2} alt="home2" />
      </Image> */}
    </StyledServices>
  );
};

export default Services;
