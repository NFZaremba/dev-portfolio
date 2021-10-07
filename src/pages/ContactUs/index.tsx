import { Dispatch, useEffect } from "react";
import { fullpageAnimation, contentAnim } from "../../shared/animation";
import { PageSlider, Image } from "../../shared/components";
import { fullpageApi } from "@fullpage/react-fullpage";
import { useScroll } from "../../shared/utils";

import photo from "../../assets/img/profile.png";
import cell from "../../assets/img/phone.jpg";

export interface IContactLinks {
  title: string;
  link: string;
}

interface IContactProps {
  moveUp: fullpageApi["moveSectionUp"];
  setSectionTitle: Dispatch<string>;
}

const ContactUs: React.FC<IContactProps> = ({ moveUp, setSectionTitle }) => {
  const [ref, controls] = useScroll();

  useEffect(() => {
    setSectionTitle("Contact Me");
  }, [setSectionTitle]);

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

            <div className="pt-8 rounded-3xl flex flex-col justify-center items-center">
              <div className="w-48 h-48 pb-4 ">
                <Image src={photo} alt="pic" />
              </div>
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
