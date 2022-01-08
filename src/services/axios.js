import axios from 'axios';

const token = localStorage.getItem('token');

export const axiosApi = axios.create({
    baseURL: 'https://de-um-lar-seu-pet-backend.herokuapp.com/api',
    timeout: 240000,
    headers: {
        'Authorization': token ? `Bearer ${token}` : '',
        'Content-Type': 'application/json'
    },
});
