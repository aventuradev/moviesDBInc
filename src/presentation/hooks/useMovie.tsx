import { useEffect, useState } from 'react';
import { FullMovie } from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases'
import { movieDBAxiosFetcher } from '../../config/adapters/movieDB.adapter';
import { Cast } from '../../core/entities/cast.entity';

export const useMovie = (movieId: number) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState<FullMovie>();
    const [cast, setCast] = useState<Cast[]>()

    useEffect(() => {
        loadMovie();
    }, [movieId])


    const loadMovie = async () => {
        setIsLoading(true)
        const fullMoviePromise = UseCases.getMovieByIdUseCase(movieDBAxiosFetcher, movieId);
        const castPromise = UseCases.getMovieCastUseCase(movieDBAxiosFetcher, movieId);

        const [fullMovie, cast] = await Promise.all([fullMoviePromise, castPromise]);

        setMovie(fullMovie);
        setCast(cast)

        setIsLoading(false);
    }
    return {
        isLoading,
        movie,
        cast
    }
}
