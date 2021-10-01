import {
  fullpageAnimation,
  contentAnim,
  titleAnim,
  subAnim,
} from "../../shared/animation";
import { PageSlider, Button, Image } from "../../shared/components";
import { fullpageApi } from "@fullpage/react-fullpage";
import { useScroll } from "../../shared/utils";
import cell from "../../assets/img/phone.jpg";

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
        <PageSlider.SubHeader variants={titleAnim}>
          <a
            href="mailto: nfzaremba@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            nfzaremba@gmail.com
          </a>
        </PageSlider.SubHeader>
        <Button
          variants={subAnim}
          onClick={moveUp}
          style={{ position: "relative" }}
        >
          Up
        </Button>
      </PageSlider.Title>
      <PageSlider.Content variants={contentAnim}>
        <Image src={cell} alt="contact" />
      </PageSlider.Content>
    </PageSlider>
  );
};

export default ContactUs;
