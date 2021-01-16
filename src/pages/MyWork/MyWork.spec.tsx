import { screen, render, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { MyWork, projects } from "..";

describe("My Work", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <MyWork />
      </BrowserRouter>
    );
  });

  it("should render without breaking", () => {
    expect(screen.getByTestId("mywork-section")).toBeInTheDocument();
  });

  it("should render all projects with correct data", () => {
    projects.forEach(({ title, img, path, alt }) => {
      const project = screen.getByText(title).closest("div");
      const currentProject = within(project as HTMLElement);

      expect(currentProject.getByText(title)).toBeInTheDocument();
      expect(currentProject.getByAltText(alt)).toBeInTheDocument();
      expect(currentProject.getByAltText(alt)).toHaveAttribute("src", img);
      expect(currentProject.getByAltText(alt).parentElement).toHaveAttribute(
        "href",
        path
      );
    });
  });
});
