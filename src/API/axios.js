import axios from "axios";

export const API_URL = "https://api.ecogarbage.ru/api/v1";

const $api = axios.create({
    baseURL: API_URL,
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json',
    },

});

export default $api;