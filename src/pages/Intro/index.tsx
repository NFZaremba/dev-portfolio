import { Dispatch, useEffect } from "react";
import { Image, Overlay, PageSlider, Toggle } from "../../shared/components";
import useScroll from "../../shared/utils/useScroll";
import seattle from "../../assets/img/space-needle.jpg";
import { ISectionTitle } from "../../shared/types";
import { COLORS } from "../../shared/constants";
import { useCycle } from "framer-motion";
import { useIsLarge } from "../../shared/utils/useMediaQuery";

interface IIntroProps {
  setSectionTitle: Dispatch<ISectionTitle>;
}

const Intro: React.FC<IIntroProps> = ({ setSectionTitle }) => {
  const [ref, controls, inView] = useScroll();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const isLarge = useIsLarge();

  useEffect(() => {
    if (inView) {
      setSectionTitle({ title: "Who am I", color: COLORS.intro.color });
    }
  }, [setSectionTitle, inView]);

  return (
    <PageSlider
      ref={ref}
      initial="hidden"
      animate={controls}
      data-testid="about-section"
    >
      <PageSlider.Content gradient={COLORS.intro.gradient}>
        <PageSlider.Left animate={isOpen || isLarge ? "open" : "closed"}>
          <PageSlider.Header>
            <PageSlider.Title
              color={COLORS.intro.color}
              bgColor={COLORS.intro.bgColor}
            >
              Hi, I'm Nick!
            </PageSlider.Title>
            <p className="p-4">
              I have a passion for creating software solutions with great user
              experience in mind. Always looking to improve my skills, as well
              as providing my services and experience in a team or solo
              environment.
            </p>
          </PageSlider.Header>
        </PageSlider.Left>
        <PageSlider.Right>
          <Overlay color={COLORS.intro.overlay} />
          <Image src={seattle} alt="seattle" />
          <Toggle
            className="lg:hidden"
            toggle={() => toggleOpen()}
            animate={isOpen ? "open" : "closed"}
          />
        </PageSlider.Right>
      </PageSlider.Content>
    </PageSlider>
  );
};

export default Intro;
