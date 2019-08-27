import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
});

export default {
  // getRoot() {
  //   return apiClient.get();
  // },
  // example() {
  //   return apiClient.get('/games/group_things');
  // },
  authenticate() {
    return apiClient.post('/auth/google', '');
  },
};
