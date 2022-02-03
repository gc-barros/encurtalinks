import axios from "axios";

export const key = "4603436dd63a47cf7235256daeab4c9c80c1e468";

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: {
    'Authorization': `Bearer ${key}`
  }
})

export default api;