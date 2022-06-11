import axios from 'axios';
import { baseURL, apiKey, language } from '../constants/apiConstants';

const movieDB = axios.create({
  baseURL,
  params: {
    api_key: apiKey,
    language,
  },
});

export default movieDB;
