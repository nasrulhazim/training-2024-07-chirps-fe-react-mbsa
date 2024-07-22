import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api',
  withCredentials: true,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = token;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default {
  getChirps() {
    return apiClient.get('/chirps');
  },
  register(data) {
    return apiClient.post('/register', data);
  },
  login(data) {
    return apiClient.post('/login', data);
  },
  logout() {
    return apiClient.post('/logout');
  },
  // Add other CRUD methods as needed
};
