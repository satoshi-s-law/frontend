import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: 'https://api.clockify.me/api/v1/',
  headers: {
    'X-Api-Key': 'XPbc4lnaZRbCOFAB',
  },
});

export default AxiosInstance;
