import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://library-cleverland-2jfze.ondigitalocean.app/',
});

const getAccessToken = (): string | null => {
  return localStorage.getItem('accessToken');
};

instance.interceptors.request.use(
  config => {
    const accessToken = getAccessToken();

    if (accessToken) {
      const newConfig = { ...config };

      newConfig.headers.Authorization = `Bearer ${getAccessToken()}`;

      return newConfig;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
