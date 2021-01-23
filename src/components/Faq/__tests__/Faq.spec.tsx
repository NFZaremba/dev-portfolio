import {
  renderWithProviders,
  screen,
  within,
} from "../../../test-utils/react-router-wrapper";
import { Faq } from "../..";
import { faqs } from "../faqs";
import userEvent from "@testing-library/user-event";

describe("Faq section", () => {
  beforeEach(() => {
    renderWithProviders(<Faq />);
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

      userEvent.click(
        currentFaq.getByText(question).parentElement as HTMLElement
      );

      expect(currentFaq.getByText(question)).toBeInTheDocument();

      answers?.forEach((answer) => {
        expect(currentFaq.getByText(answer)).toBeInTheDocument();
      });
    });
  });
});
