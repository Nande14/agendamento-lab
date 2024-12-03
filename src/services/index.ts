import axios from "axios";

export const appointmentUrl = "https://agendamentolabback-42tkkyxe.b4a.run";
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
