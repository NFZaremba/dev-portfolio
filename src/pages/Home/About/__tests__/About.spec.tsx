import {
  renderWithProviders,
  screen,
} from "../../../../test-utils/react-router-wrapper";
import About from "..";

describe("About section", () => {
  beforeEach(() => {
    renderWithProviders(<About />);
  });

  it("should render without breaking", () => {
    expect(screen.getByTestId("about-section")).toBeInTheDocument();
  });

  it("should display title, subtitle, and images", () => {
    expect(screen.getByText(/passionate/i)).toBeInTheDocument();
    expect(screen.getByText(/loves/i)).toBeInTheDocument();
    expect(screen.getByText(/personal/i)).toBeInTheDocument();
    expect(screen.getByText(/Supportive/i)).toBeInTheDocument();
    expect(screen.getByAltText(/camera/i)).toBeInTheDocument();
  });
});
