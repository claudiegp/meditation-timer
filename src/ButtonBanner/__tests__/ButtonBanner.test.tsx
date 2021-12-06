import { render, screen } from "@testing-library/react";
import ButtonBanner from "../ButtonBanner";

const countdownHasStarted = () => {
  render(
    <ButtonBanner
      startCountdown={jest.fn()}
      resetCountdown={jest.fn()}
      pauseCountdown={jest.fn()}
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
    it("should display `Start` button", () => {
      countdownHasNotStarted();
      const startText = screen.getByText(/start/i);
      expect(startText).toBeInTheDocument();
    });
    it("should display `Reset` button", () => {
      countdownHasNotStarted();
      const resetText = screen.getByText(/start/i);
      expect(resetText).toBeInTheDocument();
    });
  });

  describe("countdown has started", () => {
    it("should display `Pause` button", () => {
      countdownHasStarted();
      const pauseText = screen.getByText(/pause/i);
      expect(pauseText).toBeInTheDocument();
    });
  });

  describe("countdown has NOT started", () => {
    it("should display `Start` button when countdown begins and `hasCountdownStarted` is true", () => {
      countdownHasNotStarted();
      const startText = screen.getByText(/start/i);
      expect(startText).toBeInTheDocument();
    });
  });
});
