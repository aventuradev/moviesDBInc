import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDB } from "../../../infraestructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infraestructure/mappers/movie.mapper";
import { FullMovie } from "../../entities/movie.entity";



export const getMovieByIdUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<FullMovie> => {

    try {
        const movie = await fetcher.get<MovieDB>(`/${movieId}`);
        return MovieMapper.fromMovieDBToEntity(movie);


    } catch (error) {
        throw new Error(`Cannot get movie by id: ${movieId}`)
    }
}