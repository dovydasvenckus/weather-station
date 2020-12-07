import axios from "axios";

const apiUrl = process.env.API_URL;

const getWeather = () => axios.get(apiUrl)

export default { getWeather };