import axios from 'axios';

export const client = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFToken'
});