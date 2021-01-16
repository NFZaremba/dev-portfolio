import { render, screen, within } from "@testing-library/react";
import { Faq } from "../..";
import { faqs } from "../__data__/faqs";

describe("Faq section", () => {
  beforeEach(() => {
    render(<Faq />);
  });

  it("should render without breaking", () => {
    expect(screen.getByTestId("faq-section")).toBeInTheDocument();
  });

  it("should display title", () => {
    expect(screen.getByText(/any questions/i)).toBeInTheDocument();
    expect(screen.getByText(/any questions/i)).toBeVisible();
  });

  it("should display all questions and answers", () => {
    faqs.forEach(({ question, answers }) => {
      const faq = screen.getByText(question).closest("div");
      const currentFaq = within(faq as HTMLElement);

      expect(currentFaq.getByText(question)).toBeInTheDocument();

      answers?.forEach((answer) => {
        expect(currentFaq.getByText(answer)).toBeInTheDocument();
      });
    });
  });
});
