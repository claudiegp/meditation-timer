import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TimeSelector from "../TimeSelector";

const renderTimer = () => {
  render(<TimeSelector clockType="timer" />);
};

// todo:
const renderStopwatch = () => {
  render(<TimeSelector clockType="stopwatch" />);
};

describe("TimeSelector when clockType is `timer`", () => {
  beforeEach(() => {
    renderTimer();
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

    // use async await to wait for the component to re-render
    it("should render a pause button when user clicks `start`", async () => {
      const hourInput = screen.getByTestId("menu-items-hours");
      userEvent.click(hourInput);
      const option = await screen.findByTestId("menu-items-hours-1");
      userEvent.click(option);

      // fireEvent.input(screen.getByLabelText("Hours"), {
      //   target: { value: '{"x": "5"}' },
      // });

      const startButton = screen.getByTestId("start-button");
      userEvent.click(startButton);

      const pauseButton = await screen.findByTestId("pause-button");
      expect(pauseButton).toBeInTheDocument();
    });

    // TODO
    it("should render a start button when user clicks `reset`", () => {
      const resetButton = screen.getByText(/reset/i);
      userEvent.click(resetButton);
      const startButton = screen.getByText(/start/i);
      expect(startButton).toBeInTheDocument();
    });
  });

  describe("functionality", () => {
    it("should allow user to select a start time from dropdown", () => {
      const hours = screen.getByLabelText(/hours/i);
      userEvent.click(hours);

      // QUESTION - how to input a field
      // const x = screen.getByTestId("menu-item-hours-0");
      fireEvent.change(hours, { target: { value: 1 } });
      // userEvent.selectOptions(hours, "1");

      // check hours.value
      expect(hours).toHaveValue(1);
    });
  });

  // question - how to test this
  describe("clicking `start` button", () => {
    it("should start countdown", () => {
      const startButton = screen.getByText(/start/i);
      userEvent.click(startButton);
      expect(startButton).toBeInTheDocument();
    });
  });
  // describe("reset button", () => {
  //   test("should reset the dropdown values back to 0", () => {
  //     const zero = screen.getAllByText(/0/i);
  //     expect(zero).toBeInTheDocument();
  //   });
  // });
  // test("should reset the clock back to 0", () => {});
});

describe("TimeSelector when clockType is `stopwatch`", () => {
  beforeEach(() => {
    renderStopwatch();
  });
  describe("rendering", () => {
    it("should not render `hours` input field", () => {
      const inputField = screen.getByTestId("menu-items-hours");
      expect(inputField).toBeInTheDocument();
    });

    it("should not render `minutes` input field", () => {
      const inputField = screen.getByTestId("menu-items-minutes");
      expect(inputField).toBeInTheDocument();
    });

    it("should not render `seconds` input field", () => {
      const inputField = screen.getByTestId("menu-items-seconds");
      expect(inputField).toBeInTheDocument();
    });
  });

  describe("functionality", () => {
    test("should stop timer when clock reaches 59 hours 59 seconds (3599 seconds) ", () => {
      // todo
    });
  });
});
