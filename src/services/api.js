import axios from 'axios';

// create default api instance
const apiClient = axios.create({
  // @todo Can be improve to based on .env setup.
  baseURL: 'http://localhost:8000/api',
  withCredentials: true,
  // set default headers, only accept & send application/json
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

// if token exists in local storage,
// include the token in the Authorization header.
apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = token;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

// define all api endpoints as service.
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
