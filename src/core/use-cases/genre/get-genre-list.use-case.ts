import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBGenreResponse } from "../../../infraestructure/interfaces/movie-db.responses";
import { GenreMapper } from "../../../infraestructure/mappers/genre.mapper";
import { Genre } from "../../entities/genre.entity";


export const getGenresListUsecase = async (fetcher: HttpAdapter): Promise<Genre[]> => {

    try {
        const { genres } = await fetcher.get<MovieDBGenreResponse>('/list');
        return genres.map(genre => GenreMapper.fromMovieDBCastToEntity(genre));

    } catch (error) {
        console.log({ error })
        throw new Error(`Cannot get movies genre list`)
    }
}