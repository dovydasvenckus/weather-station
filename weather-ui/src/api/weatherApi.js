import axios from "axios";

const getWeather = () => axios.get("http://localhost:5000/api/weather")

export default { getWeather };