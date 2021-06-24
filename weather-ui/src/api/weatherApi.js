import axios from "axios";
import formatISO from 'date-fns/formatISO';
const apiUrl = process.env.API_URL;

const getWeather = (date) => {
  return axios.get(apiUrl,
    { params : {
      date: formatISO(date, { representation: 'date' })
      }
    }
  );
}

export default { getWeather };