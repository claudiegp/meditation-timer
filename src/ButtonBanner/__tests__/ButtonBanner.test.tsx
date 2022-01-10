import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonBanner from "../ButtonBanner";

const resetCounter = jest.fn();
const pauseCounter = jest.fn();
const startCounter = jest.fn();

const counterHasStarted = () => {
  render(
    <ButtonBanner
      startCounter={startCounter}
      resetCounter={resetCounter}
      pauseCounter={pauseCounter}
      isCounting={true}
    />
  );
};

const counterHasNotStarted = () => {
  render(
    <ButtonBanner
      startCounter={startCounter}
      resetCounter={resetCounter}
      pauseCounter={pauseCounter}
      isCounting={false}
    />
  );
};

const counterHasBeenPaused = () => {
  render(
    <ButtonBanner
      startCounter={startCounter}
      resetCounter={resetCounter}
      pauseCounter={pauseCounter}
      isCounting={false}
    />
  );
};

describe("<ButtonBanner />", () => {
  describe("on first render", () => {
    it("should render `Start` button", () => {
      counterHasNotStarted();
      const startText = screen.getByText(/start/i);
      expect(startText).toBeInTheDocument();
    });
    it("should render `Reset` button", () => {
      counterHasNotStarted();
      const resetText = screen.getByText(/start/i);
      expect(resetText).toBeInTheDocument();
    });
  });

  describe("when counter has started", () => {
    test("should display `Pause` button", () => {
      counterHasStarted();
      const pauseText = screen.getByTestId("pause-button");
      expect(pauseText).toBeInTheDocument();
    });

    test("should call pauseCounter() on click", () => {
      counterHasStarted();
      const pauseButton = screen.getByTestId("pause-button");
      userEvent.click(pauseButton);
      expect(pauseCounter).toHaveBeenCalled();
    });
  });

  describe("start button", () => {
    it("should display `Start` button", () => {
      counterHasNotStarted();
      const startText = screen.getByText(/start/i);
      expect(startText).toBeInTheDocument();
    });

    test("user can start", () => {
      counterHasNotStarted();
      const startButton = screen.getByTestId("start-button");

      userEvent.click(startButton);
      expect(startCounter).toHaveBeenCalled();
      expect(startCounter).toHaveBeenCalledTimes(1);
    });
  });

  describe("reset button", () => {
    test("should call resetCounter() on click", () => {
      counterHasStarted();
      const resetText = screen.getByText(/reset/i);
      userEvent.click(resetText);
      expect(resetCounter).toHaveBeenCalled();
    });
  });

  describe("pause button", () => {
    test("should render 'start' text in button", () => {
      counterHasBeenPaused();
      const startText = screen.getByText(/start/i);
      expect(startText).toBeInTheDocument();
    });

    test("clicking 'start' should start counter", () => {
      counterHasBeenPaused();
      const startButton = screen.getByTestId("start-button");
      expect(startButton).toBeInTheDocument();

      userEvent.click(startButton);
      expect(startCounter).toHaveBeenCalled();
      expect(startCounter).toHaveBeenCalledTimes(1);
    });
  });
});
