import React from "react";
import { ContainerProfile } from "./styles";
import PropTypes from "prop-types";

const ProfileItem = ({ repoLoading, profileLoading, data }) => {
  return (
    <ContainerProfile>
      {profileLoading ? (
        <div className="loading-profile">
          <h1>Loading the searched profile...</h1>
        </div>
      ) : (
        <>
          <div className="profile">
            <img src={data?.avatar_url} alt={data.name} />
            <div className="description-profile">
              <h1>{data?.name}</h1>
              {data?.total_repository ? (
                <p>
                  {data?.total_repository}{" "}
                  {data?.total_repository === 1 ? "Repository" : "Repositories"}
                </p>
              ) : (
                <p>This Profile doesn't have any repositories</p>
              )}
            </div>
          </div>
          <h2>Repositories</h2>
          {repoLoading ? (
            <div className="loading-repositories">
              <h2>Loading profile repositories...</h2>
            </div>
          ) : (
            <ul className="repositories">
              {data.repositories?.map((repository) => {
                return (
                  <li key={repository.name}>
                    <h2>{repository.name}</h2>
                    <p>
                      {repository.description
                        ? repository.description
                        : "doesn't have a description about this repository"}
                    </p>
                  </li>
                );
              })}
            </ul>
          )}
        </>
      )}
    </ContainerProfile>
  );
};

ProfileItem.propTypes = {
  data: PropTypes.object.isRequired,
  repoLoading: PropTypes.bool,
  profileLoading: PropTypes.bool,
};

ProfileItem.defaultProps = {
  data: {},
  repoLoading: false,
  profileLoading: false,
};

export default ProfileItem;
