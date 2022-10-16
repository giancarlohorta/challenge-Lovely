import fixtures from "./fixtures";
import functions from "./functions";
import urls from "./urls";
describe("tests about helper", () => {
  test("should normalize responses", () => {
    expect(functions.normalize(fixtures.profile, fixtures.repository)).toEqual(
      fixtures.normalizedProfile
    );
  });
  test("should create the profile url", () => {
    expect(urls.profileUrl("giancarlohorta")).toEqual(
      "https://api.github.com/users/giancarlohorta"
    );
  });
  test("should create the repositories url", () => {
    expect(urls.reposUrl("giancarlohorta")).toEqual(
      "https://api.github.com/users/giancarlohorta/repos"
    );
  });
});
