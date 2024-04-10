import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";

const User = {
  getUserByEmail(email) {
    return axios.get(`${BASE_URL}/user`, {
      headers: {
        email: email,
      },
    });
  },
  postUser(data) {
    return axios.post(`${BASE_URL}/user`, data);
  },
  getUser(data) {
    return axios.get(`${BASE_URL}/login`, data);
  },
  updatePasswordUser(data) {
    return axios.post(`${BASE_URL}/reset-password`, data);
  },
};

export { User };
