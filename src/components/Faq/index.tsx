import { StyledFaq } from "./Styles";
import { faqs, IFaq } from "./faqs";
import { Toggle } from "..";
import { AnimateSharedLayout } from "framer-motion";

const Faq: React.FC = () => {
  return (
    <StyledFaq data-testid="faq-section">
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
