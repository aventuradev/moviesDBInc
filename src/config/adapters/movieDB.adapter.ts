// import { MOVIE_DB_API_KEY } from '@env';
import { AxiosAdapter } from './axios/axios.adapter';


export const movieDBAxiosFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        // api_key: MOVIE_DB_API_KEY,
        api_key: '986a896ea5fe44a4029a5cf1894c6990',
        language: 'es',
    },
});

export const movieDBAuthenticationAxiosFetcher = (extendenParams: Record<string, unknown> = {}) => {
    return new AxiosAdapter({
        baseUrl: 'https://api.themoviedb.org/3/authentication',
        params: {
            // api_key: MOVIE_DB_API_KEY,
            api_key: '986a896ea5fe44a4029a5cf1894c6990',
            ...extendenParams,
        },
    });
};
