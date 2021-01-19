import { screen, render, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { MyWork } from "../..";
import { projects } from "../../../shared/projects";

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
    projects.forEach(({ title, subTitle, mainImg, id, techStack }) => {
      const project = screen.getByText(title).closest("div");
      const currentProject = within(project as HTMLElement);

      expect(currentProject.getByText(title)).toBeInTheDocument();
      expect(currentProject.getByText(subTitle)).toBeInTheDocument();
      expect(currentProject.getByText(subTitle)).toBeInTheDocument();
      expect(currentProject.getByAltText(mainImg.alt)).toBeInTheDocument();
      expect(currentProject.getByAltText(mainImg.alt)).toHaveAttribute(
        "src",
        mainImg.src
      );
      expect(
        currentProject.getByAltText(mainImg.alt).parentElement
      ).toHaveAttribute("href", `/work/${id}`);

      techStack?.forEach((tech) => {
        expect(currentProject.getByText(tech)).toBeInTheDocument();
      });
    });
  });
});
