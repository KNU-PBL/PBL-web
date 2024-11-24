import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://52.78.196.254", // Spring Boot 서버 주소
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
