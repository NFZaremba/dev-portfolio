import { ProjectDetails } from "../..";
import { Route } from "react-router-dom";
import { projects } from "../../../shared/projects";
import {
  renderWithProviders,
  screen,
} from "../../../test-utils/react-router-wrapper";

describe("Project Details", () => {
  beforeEach(() => {
    renderWithProviders(
      <Route path="/work/:id">
        <ProjectDetails />
      </Route>,
      {
        route: "/work/athlete",
      }
    );
  });

  it("should render without breaking", async () => {
    const element = await screen.findByTestId("project-details-section");
    expect(element).toBeInTheDocument();
  });

  it("should display correct content", async () => {
    const currentProject = projects.find((project) => project.id === "athlete");
    const title = await screen.findByText(currentProject?.title as string);

    screen.debug();
    expect(title).toBeInTheDocument();
  });
});
