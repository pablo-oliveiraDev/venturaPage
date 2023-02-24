import axios from 'axios';
//import * as dotenv from 'dotenv';
const urlApi = process.env.REACT_APP_API;

const api = axios.create({
<<<<<<< HEAD
    baseURL: urlApi
=======
    baseURL: process.env.REACT_APP_API
>>>>>>> eb9b022cd249809261a090d8ba953bba4128466e
});
export default api;