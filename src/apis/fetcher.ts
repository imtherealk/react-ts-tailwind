import axios from "axios";

export const fetcher = async (url: string) => {
  //   console.log("url = " + url);
  return axios
    .get(url)
    .then((res) => res.data)
    .catch((error) => {
      if (error.response.status !== 400) throw error;
    });
};
