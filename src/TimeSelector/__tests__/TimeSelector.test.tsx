import { render, screen } from "@testing-library/react";
import TimeSelector from "../TimeSelector";

const renderComponent = () => {
  render(
    <TimeSelector
      hours={2}
      minutes={0}
      seconds={0}
      handleHoursChange={jest.fn()}
      handleMinutesChange={jest.fn()}
      handleSecondsChange={jest.fn()}
    />
  );
};

describe("TimeSelector", () => {
  test("should render hours input field", () => {
    renderComponent();
    expect(screen.getByTestId("textfield-hours")).toBeInTheDocument();
  });

  test("should render minutes input field", () => {
    renderComponent();
    expect(screen.getByTestId("textfield-minutes")).toBeInTheDocument();
  });

  test("should render seconds input field", () => {
    renderComponent();
    expect(screen.getByTestId("textfield-seconds")).toBeInTheDocument();
  });

  test("should render '2' hours", () => {
    renderComponent();
    expect(screen.getByText("2")).toBeInTheDocument();
  });
});
