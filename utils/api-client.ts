import axios from 'axios';

// Sorry! It's a singleton
const client = axios.create({
  baseURL: '/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

export default client;
