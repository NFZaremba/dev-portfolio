import { render, screen } from "@testing-library/react";
import { Faq } from "../../components";

describe("Faq section", () => {
  beforeEach(() => {
    render(<Faq />);
  });

  it("should render without breaking", () => {
    expect(screen.getByTestId("about-section")).toBeInTheDocument();
  });
});
