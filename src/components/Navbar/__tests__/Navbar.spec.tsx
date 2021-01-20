import {
  renderWithProviders,
  screen,
  within,
} from "../../../test-utils/react-router-wrapper";
import { Navbar } from "../..";
import { navLinks } from "../navLinks";

describe("Navbar", () => {
  beforeEach(() => {
    renderWithProviders(<Navbar />);
  });

  it("should render without breaking", () => {
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });

  it("should display main logo link", () => {
    expect(screen.getByText(/devfolio/i)).toBeInTheDocument();
  });

  it("render all links in the navbar with appropriate paths", () => {
    navLinks.forEach(({ text, path }) => {
      const link = screen.getByText(text).closest("li");
      const currentLink = within(link as HTMLElement);

      expect(currentLink.getByText(text)).toBeInTheDocument();
      expect(currentLink.getByText(text)).toBeVisible();
      expect(currentLink.getByText(text)).toHaveAttribute("href", path);
    });
  });
});
