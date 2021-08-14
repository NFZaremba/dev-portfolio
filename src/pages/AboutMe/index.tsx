import { Banner } from "../../components";
import { pageAnimation } from "../../shared/animation";
import { Details, HeadLine } from "../WorkDetails/Styles";

const AboutMe = () => {
  return (
    <Details
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      data-testid="project-details-section"
    >
      <HeadLine>
        <h2>About Me</h2>
      </HeadLine>
    </Details>
  );
};

export default AboutMe;
