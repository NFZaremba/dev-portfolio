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
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in Touch</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <SocialLinks variants={titleAnim}>
            <Circle />
            <h2>Email</h2>
          </SocialLinks>
        </Hide>
        <Hide>
          <SocialLinks variants={titleAnim}>
            <Circle />
            <h2>Github</h2>
          </SocialLinks>
        </Hide>
        <Hide>
          <SocialLinks variants={titleAnim}>
            <Circle />
            <h2>LinkedIn</h2>
          </SocialLinks>
        </Hide>
      </div>
    </ContactSection>
  );
};

export default ContactUs;
