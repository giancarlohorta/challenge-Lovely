import useQuery from "../../hooks/useQuery";
import { urls, constants, functions } from "../../helper";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import ProfileItem from "../../components/ProfileItem";
import { Error } from "./styles";

const { FETCH_STATUS } = constants;

const Profile = () => {
  const [dataProfile, setDataProfile] = useState();
  const { data, fetchStatus, request } = useFetch();
  const {
    data: dataRepo,
    fetchStatus: fetchStatusRepo,
    request: requestRepo,
  } = useFetch();
  let query = useQuery();

  const fetchsData = () => {
    request(urls.profileUrl(query.get("search")));
    requestRepo(urls.reposUrl(query.get("search")));
  };

  useEffect(() => {
    if (
      fetchStatus === FETCH_STATUS.INITIAL &&
      fetchStatusRepo === FETCH_STATUS.INITIAL
    )
      fetchsData();
    if (
      fetchStatus === FETCH_STATUS.DONE ||
      fetchStatusRepo === FETCH_STATUS.DONE
    )
      setDataProfile(functions.normalize(data, dataRepo));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchStatus, fetchStatusRepo]);
  if (
    fetchStatus === FETCH_STATUS.ERROR ||
    fetchStatusRepo === FETCH_STATUS.ERROR
  ) {
    return (
      <Error>
        <div>
          <h2>Error loading profile</h2>
          <button onClick={fetchsData}>Try Again</button>
        </div>
      </Error>
    );
  }
  return (
    <ProfileItem
      data={dataProfile}
      repoLoading={fetchStatusRepo === FETCH_STATUS.LOADING}
      profileLoading={fetchStatus === FETCH_STATUS.LOADING}
    />
  );
};

export default Profile;
