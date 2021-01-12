import { StyledFaq } from "./Styles";

export interface IFaq {
  question: string;
  answers: string[];
}

export const faqs: IFaq[] = [
  {
    question: "How Do I Start?",
    answers: [
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    ],
  },
  {
    question: "Daily Schedule?",
    answers: [
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    ],
  },
  {
    question: "Different Payment Methods?",
    answers: [
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    ],
  },
  {
    question: "What Products Do You Offer?",
    answers: [
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    ],
  },
];

const Faq: React.FC = () => {
  return (
    <StyledFaq data-testid="faq-section">
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      {faqs.map(
        (faq): React.ReactElement => (
          <div key={faq.question} className="question">
            <h4>{faq.question}</h4>
            <div className="answer">
              {faq?.answers.map(
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
