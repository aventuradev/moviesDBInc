import { AxiosAdapter } from './axios/axios.adapter';


export const movieDBAxiosFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '986a896ea5fe44a4029a5cf1894c6990',
        language: 'es',
    },
});
