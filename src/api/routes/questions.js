import axios from "axios";

const BASE_URL = process.env.BACKEND_URL;

export default () => ({
  index: () => {
    return axios.get(`${BASE_URL}/questions/`);
  },
  show: (authToken = "", id) => {
    return axios.get(`${BASE_URL}/questions/${id}`, {
      headers: { Authorization: authToken },
    });
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
  voteQuestion: (authToken = "", userId, questionId, isNegative = false) => {
    return axios.post(
      `${BASE_URL}/questions/vote`,
      {
        user_id: userId,
        question_id: questionId,
        negative: isNegative,
      },
      { headers: { Authorization: authToken } }
    );
  },
  saveQuestion: (authToken = "", userId, questionId) => {
    return axios.post(
      `${BASE_URL}/questions/save`,
      {
        user_id: userId,
        question_id: questionId,
      },
      { headers: { Authorization: authToken } }
    );
  },
  search: (query) => {
    return axios.get(`${BASE_URL}/search/questions?q=${query}`);
  },
});
