import axios from 'axios'

const CLIENT_ID = "af601f7b315e470c9e44a971eb5ee5e5"
const REDIRECT_URI = "http://localhost:3000"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"

export const loginEndpoint = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;

const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/"
});

// Saves our token as a permenent header and with every api call made to apiClient the header will be appended
export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function(config) {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    })
};

export default apiClient;

