import { MOVIE_DB_API_KEY } from '@env';
import { AxiosAdapter } from './axios/axios.adapter';


export const movieDBAxiosFetcher = (extendenParams: Record<string, unknown> = {}) => {
    return new AxiosAdapter({
        baseUrl: 'https://api.themoviedb.org/3/movie',
        params: {
            // api_key: 'YOUR_KEY',
            api_key: MOVIE_DB_API_KEY,
            language: 'es',
            ...extendenParams,
        },
    });
};

export const movieDBAuthenticationAxiosFetcher = (extendenParams: Record<string, unknown> = {}) => {
    return new AxiosAdapter({
        baseUrl: 'https://api.themoviedb.org/3/authentication',
        params: {
            // api_key: 'YOUR_KEY',
            api_key: MOVIE_DB_API_KEY,
            ...extendenParams,
        },
    });
};
