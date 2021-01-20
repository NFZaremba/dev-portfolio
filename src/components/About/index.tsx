// Components
import { CommonDescription, Image, Hide } from "../../shared/CommonStyles";
// Styles
import { motion } from "framer-motion";
import { AboutSection } from "./Styles";
// Iamges
import home1 from "../../assets/img/home1.png";

const About: React.FC = () => {
  return (
    <AboutSection>
      <CommonDescription data-testid="about-section">
        <motion.div>
          <Hide>
            <motion.h2>Passionate software developer</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              who <span>loves</span> expanding
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>personal growth.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Supportive, enthusiastic team player and leader looking for an
          environment where I may grow and contribute my professional skills and
          passion in engineering to the group’s objective.
        </p>
        <button>Contact Us</button>
      </CommonDescription>
      <Image>
        <img src={home1} alt="guy with camera" data-testid="about-image" />
      </Image>
    </AboutSection>
  );
};

export default About;
