import { Genre, MovieDBGenre } from "../interfaces/movie-db.responses";

export class GenreMapper {

    static fromMovieDBCastToEntity(genre: MovieDBGenre ): Genre {
        return {
            id: genre.id,
            name: genre.name,
        }
    }
}