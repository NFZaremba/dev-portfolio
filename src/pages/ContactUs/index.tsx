// Styles
import { ContactSection } from "./Styles";
// Animation
import { pageAnimation } from "../../shared/animation";

const ContactUs = () => {
  return (
    <ContactSection
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      Contact
    </ContactSection>
  );
};

export default ContactUs;
