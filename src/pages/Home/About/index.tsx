import { PageSlider } from "../../../components";
import {
  titleAnim,
  photoAnim,
  fullpageAnimation,
} from "../../../shared/animation";
import home1 from "../../../assets/img/home1.png";
import { useScroll } from "../../../hooks";

const About: React.FC = () => {
  const [ref, controls] = useScroll();

  return (
    <PageSlider
      ref={ref}
      variants={fullpageAnimation}
      initial="hidden"
      animate={controls}
      // exit="exit"
      data-testid="about-section"
    >
      <PageSlider.Title>
        <PageSlider.Header variants={titleAnim}>Nick</PageSlider.Header>
        <PageSlider.Header variants={titleAnim}>Zaremba</PageSlider.Header>
        {/* <PageSlider.Header variants={titleAnim}>
          who <span>loves</span> expanding
        </PageSlider.Header>
        <PageSlider.Header variants={titleAnim}>
          personal growth.
        </PageSlider.Header> */}
        <PageSlider.Text variants={titleAnim}>
          Supportive, enthusiastic team player and leader looking for an
          environment where I may grow and contribute my professional skills and
          passion in engineering to the group’s objective.
        </PageSlider.Text>
        <PageSlider.Button variants={titleAnim}>Contact Us</PageSlider.Button>
      </PageSlider.Title>
      <PageSlider.Content>
        <PageSlider.Image
          animate={controls}
          initial="hidden"
          variants={photoAnim}
          to="/"
          src={home1}
          alt="guy with camera"
        />
      </PageSlider.Content>
    </PageSlider>
  );
};

export default About;
