import { render, screen } from "@testing-library/react";
import { About } from "../../components";

describe("About section", () => {
  beforeEach(() => {
    render(<About />);
  });

  it("should render without breaking", () => {
    expect(screen.getByTestId("about-section")).toBeInTheDocument();
  });

  it("should display title and images", () => {
    expect(screen.getByTestId("about-title")).toBeInTheDocument();
    expect(screen.getByTestId("about-title")).toBeVisible();
    expect(screen.getByTestId("about-image")).toBeInTheDocument();
    expect(screen.getByTestId("about-image")).toBeVisible();
  });
});
