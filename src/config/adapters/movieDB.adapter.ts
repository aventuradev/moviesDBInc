import { MOVIE_DB_API_KEY } from '@env';
import { AxiosAdapter } from './axios/axios.adapter';


export const movieDBAxiosFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: MOVIE_DB_API_KEY,
        language: 'es',
    },
});
