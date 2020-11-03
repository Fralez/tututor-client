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
  clearInstitution: (institutionId, userId) => {
    return axios.post(
      `${BASE_URL}/users/clear_institution`,
      {
        institution_id: institutionId,
        user_id: userId,
      },
      { withCredentials: true }
    );
  },
  acceptInvitation: (invitationId) => {
    return axios.post(
      `${BASE_URL}/users/invitations/accept`,
      {
        invitation_id: invitationId,
      },
      { withCredentials: true }
    );
  },
  rejectInvitation: (invitationId) => {
    return axios.post(
      `${BASE_URL}/users/invitations/reject`,
      {
        invitation_id: invitationId,
      },
      { withCredentials: true }
    );
  },
  showUserInvitations: (userId) => {
    return axios.get(`${BASE_URL}/users/show/invitations`, {
      withCredentials: true,
    });
  },
  usersWithoutInstitution: () => {
    return axios.get(`${BASE_URL}/users/filter/without_institution`, {
      withCredentials: true,
    });
  },
  usersByRanking: () => {
    return axios.get(`${BASE_URL}/users/filter/ranking`, {
      withCredentials: true,
    });
  },
});
