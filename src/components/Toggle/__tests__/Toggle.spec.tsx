import {
  renderWithProviders,
  screen,
} from "../../../test-utils/react-router-wrapper";
import userEvent from "@testing-library/user-event";
import { Toggle } from "../..";

describe("Services section", () => {
  beforeEach(() => {
    renderWithProviders(
      <Toggle title="title test">
        <div className="answer">
          <p>answer</p>
        </div>
      </Toggle>
    );
  });

  it("should render without breaking", () => {
    expect(screen.getByText("title test")).toBeInTheDocument();
  });

  it("should display children when toggled", () => {
    expect(screen.queryByText("answer")).not.toBeInTheDocument();
    userEvent.click(
      screen.getByText("title test").parentElement as HTMLElement
    );
    expect(screen.queryByText("answer")).toBeInTheDocument();
  });

  it("should hide children after toggling twice", () => {
    userEvent.click(
      screen.getByText("title test").parentElement as HTMLElement
    );
    const answer = screen.queryByText("answer");
    expect(answer).toBeInTheDocument();

    userEvent.click(
      screen.getByText("title test").parentElement as HTMLElement
    );
    expect(answer).not.toBeInTheDocument();
  });
});
