import { contactLinks, IContactLinks } from "./contactLinks";
// Styles
import { ContactSection, Title, Circle, SocialLinks } from "./Styles";
import { Hide } from "../../shared/CommonStyles";
// Animation
import { pageAnimation, titleAnim } from "../../shared/animation";
import { motion } from "framer-motion";

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
