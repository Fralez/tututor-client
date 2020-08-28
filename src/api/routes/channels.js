import axios from "axios";

const BASE_URL = process.env.BACKEND_URL;

export default () => ({
  index: () => {
    return axios.get(`${BASE_URL}/channels/`, {
      withCredentials: true,
      headers: cookie ? { cookie: cookie } : undefined,
    });
  },
  show: (id) => {
    return axios.get(`${BASE_URL}/channels/${id}`, {
      withCredentials: true,
    });
  },
  create: (name) => {
    return axios.post(
      `${BASE_URL}/channels`,
      {
        channel: {
          name,
        },
      },
      { withCredentials: true }
    );
  },
});
