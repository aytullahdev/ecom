import Axios, { AxiosError } from "axios";
import { storage } from "@/libs/storage";
import { modals } from "@mantine/modals";
import { showAxiosErrorModal } from "@/utils/notifications";

export const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axios.interceptors.request.use((config) => {
  const token = storage.getToken();
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  config.headers.Accept = "application/json";
  config.headers["Access-Control-Allow-Origin"] = "*";

  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error instanceof AxiosError) {
      // 403 - Forbidden
      if (error.response && error.response.status == 403) {
        modals.closeAll();
        setTimeout(() => {
          showAxiosErrorModal(403);
        }, 500);
      }
      // 500 - Internal Server Error
      else if (error.response && error.response.status == 500) {
        modals.closeAll();
        setTimeout(() => {
          showAxiosErrorModal(500);
        }, 500);
      }
    }

    return Promise.reject(error);
  }
);
