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
import { useScroll } from "../../../hooks";

// TODO: create card
const Work: React.FC<IProject> = ({ title, image, id, techStack }) => {
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
      {/* <Divider variants={lineAnim} /> */}
      <Link to={`work/${id}`}>
        <motion.img variants={photoAnim} src={image.src} alt={image.alt} />
      </Link>
    </StyledWork>
  );
};

export default Work;
