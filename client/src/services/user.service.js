import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
});

export default {
  authenticate() {
    return apiClient.get('/auth/google');
  },
  yess() {
    return apiClient.get('/yess');
  },
};
