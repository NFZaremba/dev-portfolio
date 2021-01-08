import { render, screen } from "@testing-library/react";
import AboutSection from "../../components/About";

describe("AboutSection", () => {
  beforeEach(() => {
    render(<AboutSection />);
  });

  it("should render without breaking", () => {
    expect(screen.getByTestId("about-section")).toBeInTheDocument();
  });

  it("should display title with appropriate classes", () => {
    expect(screen.getByTestId("about-title")).toBeInTheDocument();
    expect(screen.getByTestId("about-title")).toBeVisible();
    expect();
  });
});
