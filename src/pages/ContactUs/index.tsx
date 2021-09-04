import {
  fullpageAnimation,
  contentAnim,
  titleAnim,
  subAnim,
} from "../../shared/animation";
import { PageSlider, Button, Image } from "../../components";
import { fullpageApi } from "@fullpage/react-fullpage";
import { useScroll } from "../../utils";
import { useState } from "react";
import ContactList from "./ContactList";
import cell from "../../assets/img/phone.jpg";

export interface IContactLinks {
  title: string;
  link: string;
}

interface IContactProps {
  moveUp: fullpageApi["moveSectionUp"];
}

const colors = ["#ff0055", "#0099ff", "#22cc88", "#ffaa00"];
const ContactUs: React.FC<IContactProps> = ({ moveUp }) => {
  const [ref, controls] = useScroll();
  const [selected, setSelected] = useState(colors[0]);

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
      <PageSlider.Content
        animate={controls}
        initial="hidden"
        variants={contentAnim}
      >
        <Image src={cell} alt="contact" initial="hidden" />
        {/* <ContactList>
          <ContactList.List>
            {colors.map((color) => (
              <ContactList.Item
                key={color}
                color={color}
                isSelected={selected === color}
                onClick={() => setSelected(color)}
              />
            ))}
          </ContactList.List>
        </ContactList> */}
      </PageSlider.Content>
    </PageSlider>
  );
};

export default ContactUs;
