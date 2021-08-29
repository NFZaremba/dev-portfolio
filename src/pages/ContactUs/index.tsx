import {
  fullpageAnimation,
  contentAnim,
  titleAnim,
  subAnim,
} from "../../shared/animation";
import { PageSlider, Button } from "../../components";
import { fullpageApi } from "@fullpage/react-fullpage";
import { useScroll } from "../../utils";

export interface IContactLinks {
  title: string;
  link: string;
}

interface IContactProps {
  moveUp: fullpageApi["moveSectionUp"];
}

const ContactUs: React.FC<IContactProps> = ({ moveUp }) => {
  const [ref, controls] = useScroll();

  return (
    <PageSlider
      ref={ref}
      variants={fullpageAnimation}
      initial="hidden"
      animate={controls}
    >
      <PageSlider.Title>
        <PageSlider.Header variants={titleAnim}>Contact</PageSlider.Header>
        <Button
          variants={subAnim}
          onClick={moveUp}
          style={{ position: "relative" }}
        >
          Up
        </Button>
      </PageSlider.Title>
      <PageSlider.Content
        animate={controls}
        initial="hidden"
        variants={contentAnim}
      >
        <h1 style={{ color: "#fff" }}>Use shared layout animation here</h1>
      </PageSlider.Content>
    </PageSlider>
  );
};

export default ContactUs;
