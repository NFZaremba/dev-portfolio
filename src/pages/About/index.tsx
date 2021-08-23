import { PageSlider } from "../../components";
import {
  fullpageAnimation,
  contentAnim,
  titleAnim,
} from "../../shared/animation";
import { useScroll } from "../../utils";
import InfoLayout from "./InfoLayout";

const About = () => {
  const [ref, controls] = useScroll();

  return (
    <PageSlider
      ref={ref}
      variants={fullpageAnimation}
      initial="hidden"
      animate={controls}
    >
      <PageSlider.Title>
        <PageSlider.Header variants={titleAnim}>About Me</PageSlider.Header>
        <PageSlider.SubHeader variants={titleAnim}>
          Software Developer
        </PageSlider.SubHeader>
      </PageSlider.Title>
      <PageSlider.Content
        animate={controls}
        initial="hidden"
        variants={contentAnim}
      >
        <InfoLayout></InfoLayout>
      </PageSlider.Content>
    </PageSlider>
  );
};

export default About;
