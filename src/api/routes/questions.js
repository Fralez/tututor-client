import axios from "axios";

const BASE_URL = process.env.BACKEND_URL;

export default () => ({
  index: () => {
    return axios.get(`${BASE_URL}/questions/`, { withCredentials: true });
  },
  show: (id, cookie = false) => {
    return axios.get(`${BASE_URL}/questions/${id}`, {
      withCredentials: true,
      headers: cookie ? { cookie: cookie } : undefined,
    });
  },
  create: (question = {}) => {
    return axios.post(
      `${BASE_URL}/questions`,
      {
        question: question,
      },
      { withCredentials: true }
    );
  },
  voteQuestion: (questionId, isNegative = false) => {
    return axios.post(
      `${BASE_URL}/questions/vote`,
      {
        question_id: questionId,
        negative: isNegative,
      },
      { withCredentials: true }
    );
  },
  saveQuestion: (questionId) => {
    return axios.post(
      `${BASE_URL}/questions/save`,
      {
        question_id: questionId,
      },
      { withCredentials: true }
    );
  },
  markCorrectAnswer: (questionId, correctAnswerId) => {
    return axios.post(
      `${BASE_URL}/questions/correct_answer`,
      {
        question_id: questionId,
        correct_answer_id: correctAnswerId,
      },
      { withCredentials: true }
    );
  },
  search: (query) => {
    return axios.get(`${BASE_URL}/search/questions?q=${query}`, {
      withCredentials: true,
    });
  },
});
