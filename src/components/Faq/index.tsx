const faqs = [
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

const Faq = () => {
  return (
    <div className="faq">
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      {faqs.map((faq) => (
        <div className="question">
          <h4>{faq.question}</h4>
          <div className="answer">
            {faq?.answers.map((answer) => (
              <p>{answer}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
