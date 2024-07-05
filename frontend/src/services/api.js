import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const registerUser = (userData) => {
    return axios.post(`${API_URL}/auth/register`, userData);
};

export const loginUser = (userData) => {
    return axios.post(`${API_URL}/auth/login`, userData);
};
