import { Link } from "react-router-dom";
// Components
import { PageTransition } from "../../components";
import { projects } from "../../shared/projects";
// Styles
import { WorkSection, Project, TechList } from "./Styles";
// Animation
import {
  pageFastAnimation,
  fade,
  photoAnim,
  lineAnim,
} from "../../shared/animation";
import { motion } from "framer-motion";
import { Hide } from "../../shared/CommonStyles";

const MyWork = () => {
  return (
    <WorkSection
      variants={pageFastAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      data-testid="mywork-section"
    >
      <PageTransition />
      {projects?.map(({ title, mainImg, id, subTitle, techStack }) => (
        <Project key={title}>
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
        </Project>
      ))}
    </WorkSection>
  );
};

export default MyWork;
