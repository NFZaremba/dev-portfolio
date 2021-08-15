import {
  fullpageAnimation,
  lineAnim,
  contentAnim,
  titleAnim,
} from "../../../shared/animation";
import { Image, PageSlider, Divider } from "../../../components";
import webdev from "../../../assets/img/webdev.svg";
import { Link } from "react-router-dom";
import { setImageAnimClass } from "../../../shared/helpers";
import useScroll from "../../../hooks/useScroll";

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
        <Divider width={100} variants={lineAnim} />
        {contactLinks?.map((contact: IContactLinks) => (
          <PageSlider.Text variants={titleAnim}>
            <a href={contact.link} target="blank">
              {contact.title}
            </a>
          </PageSlider.Text>
        ))}
      </PageSlider.Title>
      <PageSlider.Content
        animate={controls}
        initial="hidden"
        variants={contentAnim}
      >
        <Link to="aboutme">
          <Image
            src={webdev}
            alt="guy with camera"
            classes={setImageAnimClass(inVIew)}
          />
        </Link>
      </PageSlider.Content>
    </PageSlider>
  );
};

export default ContactUs;
