import { Link } from "react-router-dom";
import { IProject } from "../../shared/projects";
// Styles
import { StyledWork, TechList } from "./Styles";
// Animation
import { fade, photoAnim, lineAnim, scrollFade } from "../../shared/animation";
import { motion } from "framer-motion";
import { Hide } from "../../shared/CommonStyles";
// Hooks
import { useScroll } from "../../hooks";

const Work: React.FC<IProject> = ({
  title,
  mainImg,
  id,
  subTitle,
  techStack,
}) => {
  const [ref, controls] = useScroll();

  return (
    <StyledWork
      key={title}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={scrollFade}
    >
      <motion.h2 variants={fade}>{title}</motion.h2>
      <motion.h4 variants={fade}>{subTitle}</motion.h4>
      <TechList>
        {techStack?.map((tech) => (
          <motion.div variants={fade} className="tech-item" key={tech}>
            {tech}
          </motion.div>
        ))}
      </TechList>
      <motion.div variants={lineAnim} className="line"></motion.div>
      <Link to={`work/${id}`}>
        <Hide>
          <motion.img
            variants={photoAnim}
            src={mainImg.src}
            alt={mainImg.alt}
          />
        </Hide>
      </Link>
    </StyledWork>
  );
};

export default Work;
