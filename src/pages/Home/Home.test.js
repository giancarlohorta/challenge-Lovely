import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("test about home", () => {
  test("search action", () => {
    render(<Home />);
    userEvent.type(screen.getByRole("textbox", { name: "input" }), "test1");
    const button = screen.getByRole("button", { name: "search" });
    expect(button).toBeInTheDocument();
    userEvent.click(button);
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
  });
});
