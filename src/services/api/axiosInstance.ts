import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_OBJECTS_API,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log(`[API Request]: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log(`[API Response]:`, response);
    return response;
  },
  (error) => {
    console.error(`[API Error]:`, error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
