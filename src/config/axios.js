import axios from "axios";
import {BASE_URL, TOKEN_API} from "../constants/api";
import {getNewAccessToken, getRefreshToken, updateAccessToken} from "../utils/auth";

export default axios.create({
    baseURL: BASE_URL
});

export const axiosAuth = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

axiosAuth.interceptors.response.use(
    (response) => {
        return response;
    },
    async function (error) {
        const originalRequest = error.config;
        if ((error.response.status === 401 || error.response.status === 500) && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const newToken = getNewAccessToken();
                if (newToken) {
                    updateAccessToken(newToken);
                }
                originalRequest.headers["Authorization"] = "Bearer " + newToken;
                return axiosAuth(originalRequest);
            } catch (err) {
                console.log(err);
            }
        }
        return Promise.reject(error);
    }
);