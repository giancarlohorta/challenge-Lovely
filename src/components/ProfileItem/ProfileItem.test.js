import { render, screen } from "@testing-library/react";
import { fixtures } from "../../helper";
import ProfileItem from "./ProfileItem";

describe("tests about profile item", () => {
  test("should render profile elements", () => {
    render(<ProfileItem data={fixtures.normalizedProfile} />);
    expect(
      screen.getByText(fixtures.normalizedProfile.name)
    ).toBeInTheDocument();

    expect(screen.getAllByText("Repositories")[0]).toBeInTheDocument();
  });
  test("should render one repository", () => {
    const profile = {
      ...fixtures.normalizedProfile,
      total_repository: 1,
    };
    render(<ProfileItem data={profile} />);
    expect(screen.getByText(/1 Repository/gi)).toBeInTheDocument();
  });
  test("should render no repositories", () => {
    const profile = {
      ...fixtures.normalizedProfile,
      total_repository: 0,
    };
    render(<ProfileItem data={profile} />);
    expect(
      screen.getByText(/This Profile doesn't have any repositories/gi)
    ).toBeInTheDocument();
  });
  test("should render loading profile", () => {
    render(
      <ProfileItem data={fixtures.normalizedProfile} profileLoading={true} />
    );
    expect(
      screen.getByText(/Loading the searched profile.../gi)
    ).toBeInTheDocument();
  });
  test("should render loading repositories", () => {
    render(
      <ProfileItem data={fixtures.normalizedProfile} repoLoading={true} />
    );
    expect(
      screen.getByText(/Loading profile repositories.../gi)
    ).toBeInTheDocument();
  });
});
