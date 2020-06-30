import axios from "axios";

const BASE_URL = process.env.BACKEND_URL;

export default () => ({
  index: () => {
    return axios.get(`${BASE_URL}/questions/`);
  },
  show: (id) => {
    return axios.get(`${BASE_URL}/questions/${id}`);
  },
  create: (authToken = "", question = {}) => {
    return axios.post(
      `${BASE_URL}/questions`,
      {
        question: question,
      },
      { headers: { Authorization: authToken } }
    );
  },
  voteQuestion: (authToken = "", id, vote = 0) => {
    return axios.post(
      `${BASE_URL}/questions/vote/${id}`,
      {
        vote: vote,
      },
      { headers: { Authorization: authToken } }
    );
  },
  search: (query) => {
    return axios.get(`${BASE_URL}/search/questions?q=${query}`);
  },
});
