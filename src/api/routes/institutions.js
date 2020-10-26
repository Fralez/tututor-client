import axios from "axios";

const BASE_URL = process.env.BACKEND_URL;

export default () => ({
  index: () => {
    return axios.get(`${BASE_URL}/institutions/`, { withCredentials: true });
  },
  show: (id, cookie = false) => {
    return axios.get(`${BASE_URL}/institutions/${id}`, {
      withCredentials: true,
      headers: cookie ? { cookie: cookie } : undefined,
    });
  },
  create: (institution = {}) => {
    return axios.post(
      `${BASE_URL}/institutions`,
      {
        institution: institution,
      },
      { withCredentials: true }
    );
  },
  updateCreator: (institutionId, newCreatorUserId) => {
    return axios.post(
      `${BASE_URL}/institutions/update_creator`,
      {
        institution_id: institutionId,
        new_creator_user_id: newCreatorUserId
      },
      { withCredentials: true }
    );
  },
  createInvitation: (institutionId, userId) => {
    return axios.post(
      `${BASE_URL}/institutions/invitations/create`,
      {
        institution_id: institutionId,
        user_id: userId
      },
      { withCredentials: true }
    );
  }
});
