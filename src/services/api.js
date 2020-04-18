import axios from 'axios';

const api = axios.create({
    baseURL: 'https://btherobackend.herokuapp.com',
});

export default api;