import axios from 'axios';

export default axios.create({
    baseURL: `https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/`,
  });