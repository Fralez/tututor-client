import axios from "axios";

const BASE_URL = process.env.BACKEND_URL;

export default () => ({
  index: (authToken = "") => {
    return axios.get(`${BASE_URL}/users/`, {
      headers: { Authorization: authToken },
    });
  },
  show: (authToken = "", id) => {
    return axios.get(`${BASE_URL}/users/`, {
      headers: { Authorization: authToken },
      params: {
        id: id,
      },
    });
  },
  create: (user = {}) => {
    return axios.post(`${BASE_URL}/users`, {
      user: user,
    });
  },
});
