import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_TASK_SERVICE_URL,
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;