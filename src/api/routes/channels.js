import axios from "axios";

const BASE_URL = process.env.BACKEND_URL;

export default () => ({
  index: () => {
    return axios.get(`${BASE_URL}/channels/`, {
      withCredentials: true,
    });
  },
  show: (userOneId, userTwoId) => {
    return axios.get(`${BASE_URL}/channels/${userOneId}/${userTwoId}`, {
      withCredentials: true,
    });
  },
  create: (name, userOneId, userTwoId) => {
    return axios.post(
      `${BASE_URL}/channels`,
      {
        channel: {
          name,
          user_one_id: userOneId,
          user_two_id: userTwoId,
        },
      },
      { withCredentials: true }
    );
  },
});
