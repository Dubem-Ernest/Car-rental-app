import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // adjust to your backend route
});

// attach token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("userToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
