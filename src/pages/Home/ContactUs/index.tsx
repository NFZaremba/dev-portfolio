import {
  fullpageAnimation,
  lineAnim,
  contentAnim,
  titleAnim,
  subAnim,
} from "../../../shared/animation";
import { Image, PageSlider, Button } from "../../../components";
import webdev from "../../../assets/img/webdev.svg";
import { setImageAnimClass } from "../../../shared/helpers";
import useScroll from "../../../hooks/useScroll";
import { fullpageApi } from "@fullpage/react-fullpage";

export interface IContactLinks {
  title: string;
  link: string;
}

interface IContactProps {
  moveUp: fullpageApi["moveSectionUp"];
}

const ContactUs: React.FC<IContactProps> = ({ moveUp }) => {
  const [ref, controls, inVIew] = useScroll();

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
        <form>
          <div>form here</div>
        </form>
      </PageSlider.Content>
    </PageSlider>
  );
};

export default ContactUs;
