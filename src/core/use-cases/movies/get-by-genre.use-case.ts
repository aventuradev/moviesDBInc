import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieDBMoviesGenreResponse } from '../../../infraestructure/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infraestructure/mappers/movie.mapper';
import { Movie } from '../../entities/movie.entity';



export const getMoviesDBByGenreUsecase = async (fetcher: HttpAdapter): Promise<Movie[]> => {

    try {
        const { results } = await fetcher.get<MovieDBMoviesGenreResponse>('');

        return results.map(MovieMapper.fromMovieDBResultToEntity);

    } catch (error) {
        console.log({ error });
        throw new Error('Cannot get movies genre list');
    }
};
