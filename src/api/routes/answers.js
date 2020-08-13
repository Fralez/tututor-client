import axios from "axios";

const BASE_URL = process.env.BACKEND_URL;

export default () => ({
  index: (questionId, cookie = false) => {
    return axios.get(`${BASE_URL}/answers/`, {
      withCredentials: true,
      headers: cookie ? { cookie: cookie } : undefined,
      params: { question_id: questionId },
    });
  },
  show: (id) => {
    return axios.get(`${BASE_URL}/answers/${id}`, {
      withCredentials: true,
    });
  },
  create: (answer = {}) => {
    return axios.post(
      `${BASE_URL}/answers`,
      {
        answer: answer,
      },
      { withCredentials: true }
    );
  },
  voteAnswer: (answerId, isNegative = false) => {
    return axios.post(
      `${BASE_URL}/answers/vote`,
      {
        answer_id: answerId,
        negative: isNegative,
      },
      { withCredentials: true }
    );
  },
  saveAnswer: (answerId) => {
    return axios.post(
      `${BASE_URL}/answers/save`,
      {
        answer_id: answerId,
      },
      { withCredentials: true }
    );
  },
});
