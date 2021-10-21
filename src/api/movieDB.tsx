import axios from 'axios';

const movieDV = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '0fca3156f0ff4a306b31399d190d756c',
    language: 'es-ES',
  },
});

export default movieDV;
