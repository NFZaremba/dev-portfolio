import { Dispatch, useEffect } from "react";
import { Image, PageSlider } from "../../shared/components";
import { contentAnim, fullpageAnimation } from "../../shared/animation";
import { useScroll } from "../../shared/utils";

import seattle from "../../assets/img/seattle.jpg";

interface IIntroProps {
  setSectionTitle: Dispatch<string>;
}

const Intro: React.FC<IIntroProps> = ({ setSectionTitle }) => {
  const [ref, controls, inView] = useScroll();

  useEffect(() => {
    if (inView) {
      setSectionTitle("Nick Z");
    }
  }, [setSectionTitle, inView]);

  return (
    <PageSlider
      ref={ref}
      variants={fullpageAnimation}
      initial="hidden"
      animate={controls}
      data-testid="about-section"
    >
      <PageSlider.Content variants={contentAnim}>
        <PageSlider.Left>
          <PageSlider.Header>About Me</PageSlider.Header>
          <div className="p-4 text-lg font-medium w-full divide-y">
            <h1 className="pb-4 text-blue-600">Hi, I'm Nick! </h1>
            <p className="pt-4">
              I have a passion for creating software solutions with great user
              experience in mind. Always looking to improve my skills, as well
              as providing my services and experience in a team or solo
              environment.
            </p>
          </div>
        </PageSlider.Left>
        <PageSlider.Right>
          <Image src={seattle} alt="seattle" />
        </PageSlider.Right>
      </PageSlider.Content>
    </PageSlider>
  );
};

export default Intro;
