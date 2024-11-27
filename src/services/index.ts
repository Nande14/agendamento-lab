import axios from "axios";

const appointmentUrl = "https://agendamentoback-h2i55nsa.b4a.run";
const getToken = () => window.localStorage.getItem("token");

export const appointmentApi = axios.create({
  baseURL: appointmentUrl,
  timeout: 10000,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

appointmentApi.interceptors.request.use(
  async (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
