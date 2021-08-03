import { Link } from "react-router-dom";
import { IProject } from "./types";
import { StyledWork, TechList } from "./Styles";
import {
  fade,
  photoAnim,
  lineAnim,
  scrollFade,
} from "../../../shared/animation";
import { motion } from "framer-motion";
import { Hide, Divider } from "../../../shared/Styles";
import { useScroll } from "../../../hooks";

const Work: React.FC<IProject> = ({ title, mainImg, id, techStack }) => {
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
      <TechList>
        {techStack?.map((tech) => (
          <motion.div variants={fade} className="tech-item" key={tech}>
            {tech}
          </motion.div>
        ))}
      </TechList>
      <Divider variants={lineAnim}></Divider>
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
