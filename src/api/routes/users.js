import axios from "axios";

const BASE_URL = process.env.BACKEND_URL;

export default () => ({
  index: () => {
    return axios.get(`${BASE_URL}/users/`, {
      withCredentials: true,
    });
  },
  show: (id) => {
    return axios.get(`${BASE_URL}/users/${id}`, {
      withCredentials: true,
    });
  },
  create: (user = {}) => {
    return axios.post(`${BASE_URL}/users`, {
      user: user,
      withCredentials: true,
    });
  },
  usersWithoutInstitution: () => {
    return axios.get(`${BASE_URL}/users/filter/without_institution`, {
      withCredentials: true,
    });
  },
});
