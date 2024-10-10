import { MOVIE_DB_API_KEY } from '@env';
import { AxiosAdapter } from './axios/axios.adapter';

export const byGenreDBAxiosFetcher = (extendedParams: Record<string, unknown>) => {
    return new AxiosAdapter({
        baseUrl: 'https://api.themoviedb.org/3/discover/movie',
        params: {
            api_key: MOVIE_DB_API_KEY,
            language: 'es',
            ...extendedParams,
        },
    });
};
