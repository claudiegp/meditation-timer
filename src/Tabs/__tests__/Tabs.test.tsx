import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tabs } from "../Tabs";

describe("Tabs", () => {
  const onChange = jest.fn();

  const renderComponent = () => {
    render(<Tabs clockType="timer" onChange={onChange} />);
  };
  test("should render Timer tab", () => {
    renderComponent();
    expect(screen.getByTestId("timer-tab")).toBeInTheDocument();
  });

  test("should render Stopwatch tab", () => {
    renderComponent();
    expect(screen.getByTestId("stopwatch-tab")).toBeInTheDocument();
  });

  test("should call onChange when changing tabs", () => {
    renderComponent();

    userEvent.click(screen.getByTestId("stopwatch-tab"));
    userEvent.click(screen.getByTestId("timer-tab"));
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
