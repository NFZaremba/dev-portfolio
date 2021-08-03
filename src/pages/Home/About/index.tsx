import { useHistory } from "react-router";
import { PageSlider } from "../../../components";
import {
  titleAnim,
  photoAnim,
  fullpageAnimation,
  lineAnim,
} from "../../../shared/animation";
import programmer from "../../../assets/img/programmer.svg";
import { useScroll } from "../../../hooks";
import { Divider } from "../../../shared/Styles";

const About: React.FC = () => {
  const [ref, controls] = useScroll();
  const history = useHistory();

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
        <Divider variants={lineAnim} />
        <PageSlider.Text variants={titleAnim}>
          Learn more about me
        </PageSlider.Text>
        <PageSlider.Button
          variants={titleAnim}
          onClick={() => history.push("aboutme")}
        >
          Learn More
        </PageSlider.Button>
      </PageSlider.Title>
      <PageSlider.Content>
        <PageSlider.Image
          animate={controls}
          initial="hidden"
          variants={photoAnim}
          to="aboutme"
          src={programmer}
          alt="guy with camera"
        />
      </PageSlider.Content>
    </PageSlider>
  );
};

export default About;
