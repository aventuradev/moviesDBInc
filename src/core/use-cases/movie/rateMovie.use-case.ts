import { HttpAdapter } from '../../../config/adapters/http/http.adapter';



export const rateMovieUseCase = async (fetcher: HttpAdapter, movieId: number, value: number): Promise<{status_code:number,status_message: string, success: boolean}>=> {
    try {
        const response = await fetcher.post<{status_code:number,status_message: string, success: boolean}>(`/${movieId}/rating`, {
            value,
        });
        return response;
    } catch (error) {
        console.log({ error });
        throw new Error(`Cannot get movie cast of movie: ${movieId}`);
    }
};
