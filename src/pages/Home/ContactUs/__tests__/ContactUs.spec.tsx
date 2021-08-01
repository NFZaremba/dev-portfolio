import ContactUs, { contactLinks } from "..";
import {
  renderWithProviders,
  screen,
  within,
} from "../../../../test-utils/react-router-wrapper";

describe("Work Details", () => {
  beforeEach(() => {
    renderWithProviders(<ContactUs />);
  });

  it("should render without breaking", async () => {
    const element = await screen.findByTestId("contact-us");
    expect(element).toBeInTheDocument();
  });

  it("should display correct content", async () => {
    contactLinks.forEach(({ title, link }) => {
      const contact = screen.getByText(title).closest("div");
      const currentContact = within(contact as HTMLElement);

      expect(currentContact.getByText(title)).toBeInTheDocument();
      expect(currentContact.getByText(title)).toHaveAttribute("href", link);
    });
  });
});
