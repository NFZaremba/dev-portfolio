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
      <PageSlider.Content variants={contentAnim}>
        <PageSlider.Left>
          <PageSlider.Header>By Email</PageSlider.Header>
          <div className="p-4 text-lg font-medium w-full divide-y">
            <p className="pb-4">
              The best way to contact me is by email! But you can also reach me
              via direct message on{" "}
              <a
                href="https://www.linkedin.com/in/nick-zaremba-4a441a87/"
                className="text-purple-500"
              >
                LinkedIn
              </a>
              .
            </p>
            <div className="pt-16">
              <a
                className="text-3xl text-purple-700"
                href="mailto: nfzaremba@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                nfzaremba@gmail.com
              </a>
            </div>
          </div>
        </PageSlider.Left>
        <PageSlider.Right>
          <Image src={cell} alt="contact" />
        </PageSlider.Right>
      </PageSlider.Content>
      {/* <PageSlider.Title>
        <PageSlider.Header variants={titleAnim}>Contact</PageSlider.Header>
        <Button
          variants={subAnim}
          onClick={moveUp}
          style={{ position: "relative" }}
        >
          Up
        </Button>
      </PageSlider.Title> */}
    </PageSlider>
  );
};

export default ContactUs;
