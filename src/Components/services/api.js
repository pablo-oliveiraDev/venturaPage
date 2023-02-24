import axios from 'axios';
//import * as dotenv from 'dotenv';
const urlApi = process.env.REACT_APP_API;

const api = axios.create({
    baseURL: urlApi
});
export default api;