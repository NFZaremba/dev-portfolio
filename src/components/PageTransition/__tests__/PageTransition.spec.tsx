import {
  renderWithProviders,
  screen,
} from "../../../test-utils/react-router-wrapper";
import userEvent from "@testing-library/user-event";
import { PageTransition } from "../..";

describe("Services section", () => {
  beforeEach(() => {
    renderWithProviders(<PageTransition />);
  });

  it("should render without breaking", () => {
    expect(screen.getByTestId("page-transiion")).toBeInTheDocument();
  });

  it("should display all frames (children)", () => {
    const frame = screen.getAllByTestId("frame");
    expect(frame.length).toBe(4);
  });
});
