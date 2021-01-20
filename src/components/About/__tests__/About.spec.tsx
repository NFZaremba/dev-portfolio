import {
  renderWithProviders,
  screen,
} from "../../../test-utils/react-router-wrapper";
import { About } from "../..";

describe("About section", () => {
  beforeEach(() => {
    renderWithProviders(<About />);
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
