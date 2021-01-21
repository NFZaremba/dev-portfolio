import { StyledFaq } from "./Styles";
import { faqs, IFaq } from "./faqs";
import { Toggle } from "..";

const Faq: React.FC = () => {
  return (
    <StyledFaq data-testid="faq-section">
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      {faqs.map(
        ({ question, answers }: IFaq): React.ReactElement => (
          <div className="question">
            <h4>{question}</h4>
            <Toggle key={question}>
              <div className="answer">
                {answers?.map(
                  (answer, i): React.ReactElement => (
                    <p key={i}>{answer}</p>
                  )
                )}
              </div>
            </Toggle>
            <div className="faq-line"></div>
          </div>
        )
      )}
    </StyledFaq>
  );
};

export default Faq;
