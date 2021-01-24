import { StyledFaq } from "./Styles";
import { faqs, IFaq } from "./faqs";
import { Toggle } from "..";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "../../hooks";
// Animation
import { scrollFade } from "../../shared/animation";

const Faq: React.FC = () => {
  const [ref, controls] = useScroll();
  return (
    <StyledFaq
      ref={ref}
      variants={scrollFade}
      animate={controls}
      initial="hidden"
      data-testid="faq-section"
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        {faqs.map(
          ({ question, answers }: IFaq): React.ReactElement => (
            <Toggle key={question} title={question}>
              <div className="answer">
                {answers?.map(
                  (answer, i): React.ReactElement => (
                    <p key={i}>{answer}</p>
                  )
                )}
              </div>
            </Toggle>
          )
        )}
      </AnimateSharedLayout>
    </StyledFaq>
  );
};

export default Faq;
