import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TimeSelector from "../TimeSelector";

const renderComponent = () => {
  render(<TimeSelector />);
};
describe("TimeSelector", () => {
  beforeEach(() => {
    renderComponent();
  });
  describe("rendering", () => {
    it("should render a start button", () => {
      const button = screen.getByText(/start/i);
      expect(button).toBeInTheDocument();
    });

    it("should render a reset button", () => {
      const button = screen.getByText(/reset/i);
      expect(button).toBeInTheDocument();
    });

    it("should render a pause button", () => {
      const button = screen.getByText(/pause/i);
      expect(button).toBeInTheDocument();
    });
  });

  describe("functionality", () => {
    it("should allow user to select a start time from dropdown", () => {
      const hours = screen.getByLabelText(/hours/i);
      userEvent.click(hours);
      // const x = screen.getByTestId("menu-item-hours-0");
      // fireEvent.change(hours, { target: { value: 1 } });
      // userEvent.selectOptions(hours, "1");
      // expect(x).toEqual(1);
    });
  });

  describe("clicking `start` button", () => {
    it("should start countdown", () => {
      const startButton = screen.getByText(/start/i);
      userEvent.click(startButton);
      expect(startButton).toBeInTheDocument();
    });
  });
});

describe("reset button", () => {
  test("should reset the dropdown values back to 0", () => {
    const zero = screen.getAllByText(/0/i);
    expect(zero).toBeInTheDocument();
  });
});
test("should reset the clock back to 0", () => {});
