import { render, screen } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { fixtures } from "../../helper";
import Profile from "./Profile";

const mock = new MockAdapter(axios, { delayResponse: 0 });

const mockedUsedLocation = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => mockedUsedLocation,
}));

const mockRequest = (httpStatusUser) => {
  mock
    .onGet(/repos/g)
    .reply(httpStatusUser, fixtures.repository)
    .onGet(/users/g)
    .reply(httpStatusUser, fixtures.profile);
};
describe("tests about profile", () => {
  beforeEach(() => {
    mock.reset();
  });
  test("render first name", async () => {
    mockRequest(200);
    render(<Profile />);
    const name1 = await screen.findByText(/Giancarlo/gi);
    expect(name1).toBeInTheDocument();
  });
  test("render error", async () => {
    mockRequest(400);
    render(<Profile />);
    const name1 = await screen.findByText(/Error loading profile/gi);
    expect(name1).toBeInTheDocument();
  });
});
