import axios from "axios";

const BASE_URL = process.env.BACKEND_URL;

export default () => ({
  index: () => {
    return axios.get(`${BASE_URL}/messages/`, {
      withCredentials: true,
      headers: cookie ? { cookie: cookie } : undefined,
    });
  },
  show: (id) => {
    return axios.get(`${BASE_URL}/messages/${id}`, {
      withCredentials: true,
    });
  },
  create: (content, channelId) => {
    return axios.post(
      `${BASE_URL}/messages`,
      {
        message: {
          content,
          channel_id: channelId
        },
      },
      { withCredentials: true }
    );
  },
});
