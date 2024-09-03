import axios from "axios";
import { toast } from "react-toastify";
import store from "../store";
import { BaseUrl } from "../config";

// const unauthorizedCode = [401];

const BaseUrl = "http://localhost:4000/";

const AxiosInstance = axios.create({
  timeout: 60000,
  baseURL: BaseUrl,
  headers: {
    "ngrok-skip-browser-warning": "skip-browser-warning",
  },
});

AxiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = store?.getState()?.auth?.accessToken;
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
AxiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    toast.error(response?.data?.message || "Server error");
    // if (response && unauthorizedCode.includes(response?.status)) {
    //   store.dispatch(onSignOutSuccess());
    // }
    return Promise.reject(error);
  }
);

export default AxiosInstance;
