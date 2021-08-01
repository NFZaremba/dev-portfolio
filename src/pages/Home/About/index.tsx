import { PageSlider, Wave } from "../../../components";
import { Hide } from "../../../shared/Styles";
import { titleAnim, fade, photoAnim } from "../../../shared/animation";
import home1 from "../../../assets/img/home1.png";

const About: React.FC = () => {
  return (
    <PageSlider data-testid="about-section">
      <PageSlider.Title>
        <Hide>
          <PageSlider.Header variants={titleAnim}>
            Passionate software developer
          </PageSlider.Header>
        </Hide>
        <Hide>
          <PageSlider.Header variants={titleAnim}>
            who <span>loves</span> expanding
          </PageSlider.Header>
        </Hide>
        <Hide>
          <PageSlider.Header variants={titleAnim}>
            personal growth.
          </PageSlider.Header>
        </Hide>
        <PageSlider.Text variants={fade}>
          Supportive, enthusiastic team player and leader looking for an
          environment where I may grow and contribute my professional skills and
          passion in engineering to the group’s objective.
        </PageSlider.Text>
        <PageSlider.Button variants={fade}>Contact Us</PageSlider.Button>
      </PageSlider.Title>
      <PageSlider.ImageLink to="/">
        <PageSlider.Image
          variants={photoAnim}
          src={home1}
          alt="guy with camera"
        />
      </PageSlider.ImageLink>
      <Wave />
    </PageSlider>
  );
};

export default About;
