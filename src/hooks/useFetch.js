import axios from "axios";
import { useCallback, useState } from "react";
import { constants } from "../helper";

const { FETCH_STATUS } = constants;

const useFetch = () => {
  const [data, setData] = useState();
  const [fetchStatus, setFetchStatus] = useState(FETCH_STATUS.INITIAL);

  const request = useCallback(async (url, options) => {
    setFetchStatus(FETCH_STATUS.LOADING);
    try {
      const { data } = await axios.get(url, options);
      setData(data);
      setFetchStatus(FETCH_STATUS.DONE);
    } catch (e) {
      setFetchStatus(FETCH_STATUS.ERROR);
      console.log(e);
    }
  }, []);

  return { data, fetchStatus, request };
};

export default useFetch;
