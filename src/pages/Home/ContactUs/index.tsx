import { ContactSection, Title, Circle, SocialLinks } from "./Styles";
import { Hide } from "../../../shared/Styles";
import { pageAnimation, titleAnim } from "../../../shared/animation";
import { motion } from "framer-motion";

export interface IContactLinks {
  title: string;
  link: string;
}

export const contactLinks = [
  {
    title: "Email",
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
  return (
    <ContactSection
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      data-testid="contact-us"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in Touch</motion.h2>
        </Hide>
      </Title>
      <div>
        {contactLinks?.map((contact: IContactLinks) => (
          <Hide>
            <SocialLinks variants={titleAnim}>
              <Circle />
              <a href={contact.link} target="blank">
                {contact.title}
              </a>
            </SocialLinks>
          </Hide>
        ))}
      </div>
    </ContactSection>
  );
};

export default ContactUs;
