import axios from "axios";

const BASE_URL = process.env.BACKEND_URL;

export default () => ({
  login: (email, password) => {
    return axios.post(`${BASE_URL}/auth/login`, {
      email: email,
      password: password,
    });
  },
  renew: (authToken = "") => {
    return axios.post(
      `${BASE_URL}/auth/renew`,
      {},
      {
        headers: { Authorization: authToken },
      }
    );
  },
});
