import { render, screen, within } from "@testing-library/react";
import { Services, sections } from "../../components";

describe("Services section", () => {
  beforeEach(() => {
    render(<Services />);
  });

  it("should render without breaking", () => {
    expect(screen.getByTestId("services-section")).toBeInTheDocument();
  });

  it("should render title", () => {
    expect(screen.getByTestId("services-title")).toBeInTheDocument();
  });

  it("should display all cards", () => {
    const cards = screen.getAllByTestId("services-card");
    expect(cards.length).toBe(4);
  });

  it("should display correct data within each card", () => {
    sections.forEach(({ title, paragraph }) => {
      const card = screen.getByText(paragraph).closest("div");
      const currentCard = within(card as HTMLElement);

      expect(currentCard.getByText(paragraph)).toBeInTheDocument();
      expect(
        currentCard.getByAltText(title.toLocaleLowerCase())
      ).toBeInTheDocument();
      expect(currentCard.getByText(title)).toBeInTheDocument();
    });
  });
});
