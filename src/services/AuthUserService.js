import axios from 'axios';

const AUTH_USER_API_BASE_URL = 'http://localhost:8080/api/auth';

class AuthUserService {
  getUsers() {
    return axios.get(`${AUTH_USER_API_BASE_URL}/all`);
  }

  getUserById(id) {
    return axios.get(`${AUTH_USER_API_BASE_URL}/${id}`);
  }

  addUser(user) {
    return axios.post(AUTH_USER_API_BASE_URL + '/create', user);
  }

  editUser(id, user) {
    return axios.put(`${AUTH_USER_API_BASE_URL}/${id}`, user);
  }

  deleteUser(id) {
    return axios.delete(`${AUTH_USER_API_BASE_URL}/delete/${id}`);
  }
}

export default new AuthUserService();
