import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333', //colocar aqui a URL global do BACKEND
})

export default api;