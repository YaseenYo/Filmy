import axios from 'axios';

export default axios.create({
    baseURL : "https://moviesapi.azurewebsites.net/api",
});