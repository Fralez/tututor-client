import axios from "axios";

const BASE_URL = process.env.BACKEND_URL;

export default () => ({
  create: (email, password) => {
    return axios.post(
      `${BASE_URL}/sessions`,
      {
        email: email,
        password: password,
      },
      { withCredentials: true }
    );
  },
  loggedIn: () => {
    return axios.get(`${BASE_URL}/sessions/logged-in`, {
      withCredentials: true,
    });
  },
  logout: () => {
    return axios.delete(`${BASE_URL}/sessions/logout`, {
      withCredentials: true,
    });
  },
});
