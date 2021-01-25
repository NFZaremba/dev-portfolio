// Components
import { PageTransition } from "../../components";
import Work from "./Work";
import { projects } from "../../shared/projects";
// Styles
import { WorkSection } from "./Styles";
// Animation
import { pageAnimation } from "../../shared/animation";

const MyWork = () => {
  return (
    <WorkSection
      variants={pageAnimation}
      layout="position"
      initial="hidden"
      animate="show"
      exit="exit"
      data-testid="mywork-section"
    >
      <PageTransition />
      {projects?.map(({ title, mainImg, id, subTitle, techStack }) => (
        <Work
          title={title}
          mainImg={mainImg}
          id={id}
          subTitle={subTitle}
          techStack={techStack}
        />
      ))}
    </WorkSection>
  );
};

export default MyWork;
