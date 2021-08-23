import { Button, PageSlider, Image } from "../../components";
import {
  titleAnim,
  contentAnim,
  fullpageAnimation,
  subAnim,
} from "../../shared/animation";
import programmer from "../../assets/img/programmer.svg";
import { fullpageApi } from "@fullpage/react-fullpage";
import { useScroll } from "../../utils";

//* Types
interface IIntroProps {
  moveDown: fullpageApi["moveSectionDown"];
}

const Intro: React.FC<IIntroProps> = ({ moveDown }) => {
  const [ref, controls] = useScroll();

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
        <Image src={programmer} alt="guy with camera" initial="hidden" />
      </PageSlider.Content>
    </PageSlider>
  );
};

export default Intro;
