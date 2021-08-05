import { useHistory } from "react-router";
import { Button, PageSlider, Image } from "../../../components";
import {
  titleAnim,
  photoAnim,
  fullpageAnimation,
  lineAnim,
} from "../../../shared/animation";
import programmer from "../../../assets/img/programmer.svg";
import { useScroll } from "../../../hooks";
import { Divider } from "../../../shared/Styles";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  const [ref, controls] = useScroll();
  const history = useHistory();

  return (
    <PageSlider
      ref={ref}
      variants={fullpageAnimation}
      initial="hidden"
      animate={controls}
      data-testid="about-section"
    >
      <PageSlider.Title>
        <PageSlider.Header variants={titleAnim}>Nick</PageSlider.Header>
        <PageSlider.Header variants={titleAnim}>Zaremba</PageSlider.Header>
        <Divider variants={lineAnim} />
        <PageSlider.Text variants={titleAnim}>
          Learn more about me
        </PageSlider.Text>
        <Button variants={titleAnim} onClick={() => history.push("aboutme")}>
          Learn More
        </Button>
      </PageSlider.Title>
      <PageSlider.Content
        animate={controls}
        initial="hidden"
        variants={photoAnim}
        shadow
      >
        <Link to="aboutme">
          <Image src={programmer} alt="guy with camera" />
        </Link>
      </PageSlider.Content>
    </PageSlider>
  );
};

export default About;
