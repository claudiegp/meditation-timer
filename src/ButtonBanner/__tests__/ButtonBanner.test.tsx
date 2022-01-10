import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonBanner from "../ButtonBanner";

const resetCounter = jest.fn();
const pauseCounter = jest.fn();
const startCountdownOrCountup = jest.fn();

const counterHasStarted = () => {
  render(
    <ButtonBanner
      startCounter={startCountdownOrCountup}
      resetCounter={resetCounter}
      pauseCounter={pauseCounter}
      hasCounterStarted={true}
      hasCounterPaused={false}
    />
  );
};

const counterHasNotStarted = () => {
  render(
    <ButtonBanner
      startCounter={jest.fn()}
      resetCounter={jest.fn()}
      pauseCounter={jest.fn()}
      hasCounterStarted={false}
      hasCounterPaused={false}
    />
  );
};

const counterHasBeenPaused = () => {
  render(
    <ButtonBanner
      startCounter={jest.fn()}
      resetCounter={jest.fn()}
      pauseCounter={jest.fn()}
      hasCounterStarted={false}
      hasCounterPaused={true}
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
    it("should display `Pause` button", () => {
      counterHasStarted();
      const pauseText = screen.getByText(/pause/i);
      expect(pauseText).toBeInTheDocument();
    });
    test("should call pauseCounter() on click", () => {
      counterHasStarted();
      const pauseText = screen.getByText(/pause/i);
      userEvent.click(pauseText);
      expect(pauseCounter).toHaveBeenCalled();
    });
  });

  describe("when counter has NOT started", () => {
    it("should display `Start` button when counter begins and `hasCounterStarted` is true", () => {
      counterHasNotStarted();
      const startText = screen.getByText(/start/i);
      expect(startText).toBeInTheDocument();
    });

    /* WIP - FAILING */
    test("should not call startCountdown() on click if time has not been selected", () => {
      counterHasNotStarted();
      const startText = screen.getByTestId("start-button");
      userEvent.click(startText);
      expect(startCountdownOrCountup).not.toHaveBeenCalled();
    });
  });

  describe("when counter has been reset", () => {
    test("should call resetCounter() on click", () => {
      counterHasStarted();
      const resetText = screen.getByText(/reset/i);
      userEvent.click(resetText);
      expect(resetCounter).toHaveBeenCalled();
    });
  });

  describe("when counter has been paused", () => {
    describe("rendering", () => {
      test("should render 'start' text in button when `hasCounterPaused` is true", () => {
        counterHasBeenPaused();
        // todo
        const startText = screen.getByText(/start/i);
        expect(startText).toBeInTheDocument();
      });
    });

    // when user presses pause, user should be able to press `start`
    // user can pause and start counter

    describe("pause functionality", () => {
      test("user can pause", () => {
        counterHasStarted();
        const pauseButton = screen.getByTestId("pause-button");

        userEvent.click(pauseButton);
        expect(pauseCounter).toHaveBeenCalled();
        expect(pauseCounter).toHaveBeenCalledTimes(1);
      });

      // FAILING
      test("clicking 'start' should call startCountdown()", () => {
        counterHasBeenPaused();
        const startButton = screen.getByTestId("start-button");

        userEvent.click(startButton);
        expect(startCountdownOrCountup).toHaveBeenCalled();
        expect(startCountdownOrCountup).toHaveBeenCalledTimes(1);
      });

      test("clicking 'start' and then 'pause' should call pauseCountdown()", () => {
        counterHasBeenPaused();
        const startButton = screen.getByTestId("start-button");
        const pauseButton = screen.getByTestId("pause-button");

        userEvent.click(startButton);
        expect(startCountdownOrCountup).toHaveBeenCalled();
        expect(startCountdownOrCountup).toHaveBeenCalledTimes(1);

        userEvent.click(pauseButton);
        expect(pauseCounter).toHaveBeenCalled();
      });

      test("clicking 'start' should continue counter from where it was paused at", () => {
        counterHasBeenPaused();
        // todo
      });
    });
  });
});
