import { screen, render } from "@testing-library/react";
import Header from "../Header";

describe("<Header/>", () => {
  it("renders title", () => {
    render(<Header />);
    const element = screen.getByTestId("header-title");
    expect(element).toBeInTheDocument();
  });
});
