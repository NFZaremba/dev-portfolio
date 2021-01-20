import { ProjectDetails } from "../..";
import {
  renderWithProviders,
  screen,
} from "../../../test-utils/react-router-wrapper";

describe("Project Details", () => {
  beforeEach(() => {
    renderWithProviders(<ProjectDetails />, {
      route: "/work/athlete",
    });
  });

  it("should render without breaking", async () => {
    const element = await screen.findByTestId("project-details-section");
    expect(element).toBeInTheDocument();
  });

  it("should display correct content", () => {
    expect(screen.getByTestId("project-details-section")).toBeInTheDocument();
  });
});
