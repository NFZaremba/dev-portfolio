// Components
import { CommonDescription, Image, Hide } from "../../shared/CommonStyles";
// Styles
import { motion } from "framer-motion";
import { AboutSection } from "./Styles";
// Animation
import { titleAnim, fade, photoAnim } from "../../shared/animation";
// Iamges
import home1 from "../../assets/img/home1.png";

const About: React.FC = () => {
  return (
    <AboutSection>
      <CommonDescription data-testid="about-section">
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>
              Passionate software developer
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              who <span>loves</span> expanding
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>personal growth.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Supportive, enthusiastic team player and leader looking for an
          environment where I may grow and contribute my professional skills and
          passion in engineering to the group’s objective.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </CommonDescription>
      <Image>
        <motion.img
          variants={photoAnim}
          src={home1}
          alt="guy with camera"
          data-testid="about-image"
        />
      </Image>
    </AboutSection>
  );
};

export default About;
