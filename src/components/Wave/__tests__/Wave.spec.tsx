import {
  renderWithProviders,
  screen,
} from "../../../test-utils/react-router-wrapper";
import { Wave } from "../..";

describe("Services section", () => {
  beforeEach(() => {
    renderWithProviders(<Wave />);
  });

  it("should render without breaking", () => {
    expect(screen.getByTestId("wave")).toBeInTheDocument();
  });
});
