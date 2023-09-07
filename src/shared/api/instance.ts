import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://library-cleverland-2jfze.ondigitalocean.app/',
});
