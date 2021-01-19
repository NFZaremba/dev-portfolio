import { StyledFaq } from "./Styles";
import { faqs, IFaq } from "./faqs";

const Faq: React.FC = () => {
  return (
    <StyledFaq data-testid="faq-section">
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      {faqs.map(
        ({ question, answers }: IFaq): React.ReactElement => (
          <div key={question} className="question">
            <h4>{question}</h4>
            <div className="answer">
              {answers?.map(
                (answer, i): React.ReactElement => (
                  <p key={i}>{answer}</p>
                )
              )}
            </div>
            <div className="faq-line"></div>
          </div>
        )
      )}
    </StyledFaq>
  );
};

export default Faq;
