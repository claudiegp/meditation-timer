import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonBanner from "../ButtonBanner";

const resetCounter = jest.fn();
const pauseCounter = jest.fn();
const startCountdown = jest.fn();

const counterHasStarted = () => {
  render(
    <ButtonBanner
      startCountdown={startCountdown}
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
      startCountdown={jest.fn()}
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
      startCountdown={jest.fn()}
      resetCounter={jest.fn()}
      pauseCounter={jest.fn()}
      hasCounterStarted={true}
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

    /* WIP - failing */
    it("should NOT render `Pause` button", () => {
      counterHasNotStarted();
      expect(screen.getByText(/pause/i)).not.toBeInTheDocument();
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
    test("should call startCountdown() on click", () => {
      counterHasNotStarted();
      const startText = screen.getByTestId("start-button");
      userEvent.click(startText);
      expect(startCountdown).toHaveBeenCalled();
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

  describe("when counter has been paused ie. `hasCounterPaused` is true", () => {
    describe("rendering", () => {
      test("should render 'start' text in button", () => {
        counterHasBeenPaused();
        // todo
        const startText = screen.getByText(/start/i);
        expect(startText).toBeInTheDocument();
      });
    });

    describe("functionality", () => {
      test.only("clicking 'start' should call startCountdown()", () => {
        counterHasBeenPaused();

        console.log(startCountdown);

        // todo
        userEvent.click(screen.getByTestId("pause-button"));
        expect(startCountdown).toHaveBeenCalled();
        expect(startCountdown).toHaveBeenCalledTimes(1);
      });

      test("clicking 'start' should continue counter from where it was paused at", () => {
        counterHasBeenPaused();
        // todo
      });
    });
  });
});
