import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchField from "./SearchField";

describe("tests about search field", () => {
  test("should render a input, type name and submit", () => {
    const onSearch = jest.fn();
    const onChange = jest.fn();
    render(
      <SearchField onChange={onChange} onSearch={onSearch} inputText="" />
    );
    const input = screen.getByRole("textbox", { name: "input" });
    expect(input).toBeInTheDocument();
    userEvent.type(input, "search");
    expect(onChange).toHaveBeenCalledTimes(6);
  });
});
