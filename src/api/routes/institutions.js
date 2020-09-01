import axios from "axios";

const BASE_URL = process.env.BACKEND_URL;

export default () => ({
  index: () => {
    return axios.get(`${BASE_URL}/institutions/`, { withCredentials: true });
  },
  show: (id, cookie = false) => {
    return axios.get(`${BASE_URL}/institutions/${id}`, {
      withCredentials: true,
      headers: cookie ? { cookie: cookie } : undefined,
    });
  },
  create: (institution = {}) => {
    return axios.post(
      `${BASE_URL}/institutions`,
      {
        institution: institution,
      },
      { withCredentials: true }
    );
  },
});
