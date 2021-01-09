import { render, screen } from "@testing-library/react";
import { Services } from "../../components";

describe("Services section", () => {
  beforeEach(() => {
    render(<Services />);
  });

  it("should render without breaking", () => {
    expect(screen.getByTestId("about-section")).toBeInTheDocument();
  });
});
