import { Divider } from "../../../shared/Styles";
import {
  fullpageAnimation,
  lineAnim,
  photoAnim,
  titleAnim,
} from "../../../shared/animation";
import { PageSlider } from "../../../components";
import { useScroll } from "../../../hooks";
import webdev from "../../../assets/img/webdev.svg";

export interface IContactLinks {
  title: string;
  link: string;
}

export const contactLinks: IContactLinks[] = [
  {
    title: "nfzaremba@gmail.com",
    link: "/",
  },
  {
    title: "Github",
    link: "/",
  },
  {
    title: "LinkedIn",
    link: "/",
  },
];

const ContactUs = () => {
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
        <Divider variants={lineAnim} />
        {contactLinks?.map((contact: IContactLinks) => (
          <PageSlider.Text variants={titleAnim}>
            <a href={contact.link} target="blank">
              {contact.title}
            </a>
          </PageSlider.Text>
        ))}
      </PageSlider.Title>
      <PageSlider.Content>
        <PageSlider.Image
          animate={controls}
          initial="hidden"
          variants={photoAnim}
          to="aboutme"
          src={webdev}
          alt="guy with camera"
        />
      </PageSlider.Content>
    </PageSlider>
  );
};

export default ContactUs;
