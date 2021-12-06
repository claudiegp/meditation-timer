import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonBanner from "../ButtonBanner";

const resetCountdown = jest.fn();
const pauseCountdown = jest.fn();
const startCountdown = jest.fn();

const countdownHasStarted = () => {
  render(
    <ButtonBanner
      startCountdown={startCountdown}
      resetCountdown={resetCountdown}
      pauseCountdown={pauseCountdown}
      hasCountdownStarted={true}
    />
  );
};

const countdownHasNotStarted = () => {
  render(
    <ButtonBanner
      startCountdown={jest.fn()}
      resetCountdown={jest.fn()}
      pauseCountdown={jest.fn()}
      hasCountdownStarted={false}
    />
  );
};

describe("<ButtonBanner />", () => {
  describe("on first render", () => {
    it("should render `Start` button", () => {
      countdownHasNotStarted();
      const startText = screen.getByText(/start/i);
      expect(startText).toBeInTheDocument();
    });
    it("should render `Reset` button", () => {
      countdownHasNotStarted();
      const resetText = screen.getByText(/start/i);
      expect(resetText).toBeInTheDocument();
    });

    /* WIP - failing */
    it("should NOT render `Pause` button", () => {
      countdownHasNotStarted();
      expect(screen.getByText(/pause/i)).not.toBeInTheDocument();
    });
  });

  describe("when countdown has started", () => {
    it("should display `Pause` button", () => {
      countdownHasStarted();
      const pauseText = screen.getByText(/pause/i);
      expect(pauseText).toBeInTheDocument();
    });
    test("should call pauseCountdown() on click", () => {
      countdownHasStarted();
      const pauseText = screen.getByText(/pause/i);
      userEvent.click(pauseText);
      expect(pauseCountdown).toHaveBeenCalled();
    });
  });

  describe("when countdown has NOT started", () => {
    it("should display `Start` button when countdown begins and `hasCountdownStarted` is true", () => {
      countdownHasNotStarted();
      const startText = screen.getByText(/start/i);
      expect(startText).toBeInTheDocument();
    });

    /* WIP - FAILING */
    test("should call startCountdown() on click", () => {
      countdownHasNotStarted();
      const startText = screen.getByTestId("start-button");
      console.log(startText);
      userEvent.click(startText);
      expect(startCountdown).toHaveBeenCalled();
    });
  });

  describe("when countdown has been reset", () => {
    test("should call resetCountdown() on click", () => {
      countdownHasStarted();
      const resetText = screen.getByText(/reset/i);
      userEvent.click(resetText);
      expect(resetCountdown).toHaveBeenCalled();
    });
  });
});
