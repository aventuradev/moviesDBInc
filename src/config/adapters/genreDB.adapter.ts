// import { MOVIE_DB_API_KEY } from '@env';
import { AxiosAdapter } from './axios/axios.adapter';


export const genreDBAxiosFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/genre/movie',
    params: {
        // api_key: MOVIE_DB_API_KEY,
        api_key: '986a896ea5fe44a4029a5cf1894c6990',
        language: 'es',
    },
});

export const byGenreDBAxiosFetcher = (extendedParams: Record<string, unknown>) => {
    return new AxiosAdapter({
        baseUrl: 'https://api.themoviedb.org/3/discover/movie',
        params: {
            // api_key: MOVIE_DB_API_KEY,
            api_key: '986a896ea5fe44a4029a5cf1894c6990',
            language: 'es',
            ...extendedParams,
        },
    });
};
