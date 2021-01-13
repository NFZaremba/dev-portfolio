import { screen, render, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Navbar, navLinks } from "../../components";

describe("Navbar", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
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
