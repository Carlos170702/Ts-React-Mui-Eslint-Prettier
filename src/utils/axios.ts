import axios from 'axios';

export const instanceAxios = axios.create({
  baseURL: 'https://reqres.in/api'
});
