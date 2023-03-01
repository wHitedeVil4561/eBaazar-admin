import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  config.headers["Authorization"] = localStorage.getItem("accessToken")||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbGxwQGcuY29tIiwiaWF0IjoxNjc3NjY5NzM0LCJleHAiOjE2Nzg1MzM3MzR9.ZAmH8_UZVLgpN-Z8pWHe6Lnowb2rDgGoBlPMM0cP9zQ";
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response.status === 401) {
      console.log(error.response?.status);
    }
    return Promise.reject(error.response?.data);
  }
);

export default axiosInstance;
