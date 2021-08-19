import { Button, PageSlider, Image, Divider } from "../../../components";
import {
  titleAnim,
  contentAnim,
  fullpageAnimation,
  lineAnim,
  subAnim,
} from "../../../shared/animation";
import programmer from "../../../assets/img/programmer.svg";
import { Link } from "react-router-dom";
import { setImageAnimClass } from "../../../shared/helpers";
import useScroll from "../../../hooks/useScroll";
import { fullpageApi } from "@fullpage/react-fullpage";

interface IIntroProps {
  moveDown: fullpageApi["moveSectionDown"];
}

const Intro: React.FC<IIntroProps> = ({ moveDown }) => {
  const [ref, controls, inView] = useScroll();

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
        <Button
          variants={subAnim}
          onClick={moveDown}
          style={{ position: "relative" }}
        >
          Learn More
        </Button>
      </PageSlider.Title>
      <PageSlider.Content
        animate={controls}
        initial="hidden"
        variants={contentAnim}
      >
        <Link to="intro">
          <Image
            src={programmer}
            alt="guy with camera"
            classes={setImageAnimClass(inView)} // trigger image animation
            initial="hidden"
            variants={{
              hidden: {
                boxShadow: "none",
              },
              show: {
                boxShadow: "hsl(280deg 100% 22% / 55%) 5px 3px 0px",
                transition: {
                  duration: 3,
                },
              },
            }}
          />
        </Link>
      </PageSlider.Content>
    </PageSlider>
  );
};

export default Intro;
