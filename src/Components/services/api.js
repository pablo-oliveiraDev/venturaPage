import axios from 'axios';
//import * as dotenv from 'dotenv';

const api = axios.create({
    baseURL: 'http://localhost:5080'
});
export default api;