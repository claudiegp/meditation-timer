import { render, screen } from "@testing-library/react";
import { Clock } from "../Clock";

describe("<Clock>", () => {
  describe("rendering", () => {
    test("should render correct time when 0 seconds passed in as props", () => {
      render(<Clock totalSeconds={0}></Clock>);
      expect(screen.getByText("00:00:00")).toBeInTheDocument();
    });

    test("should render correct time when 3600 seconds passed in as props", () => {
      render(<Clock totalSeconds={3600}></Clock>);
      expect(screen.getByText("01:00:00")).toBeInTheDocument();
    });
  });
});
