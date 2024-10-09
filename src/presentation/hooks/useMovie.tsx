/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { FullMovie, Movie } from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases';
import { movieDBAxiosFetcher } from '../../config/adapters/movieDB.adapter';
import { Cast } from '../../core/entities/cast.entity';
import { byGenreDBAxiosFetcher } from '../../config/adapters/genreDB.adapter';

export const useMovie = (movieId: number) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState<FullMovie>();
    const [cast, setCast] = useState<Cast[]>();
    const [related, setRelated] = useState<Movie[]>();

    useEffect(() => {
        loadMovie();
    }, [movieId]);


    const loadMovie = async () => {
        setIsLoading(true);
        const fullMoviePromise = UseCases.getMovieByIdUseCase(movieDBAxiosFetcher, movieId);
        const castPromise = UseCases.getMovieCastUseCase(movieDBAxiosFetcher, movieId);

        const [fullMovie, castResponse] = await Promise.all([fullMoviePromise, castPromise]);

        setMovie(fullMovie);
        setCast(castResponse);

        if (fullMovie) {
            const GenresId = fullMovie.genres.map(genre => genre.id).join(',');
            const relatedResponse = await UseCases.getMoviesDBByGenreUsecase(byGenreDBAxiosFetcher({ with_genres: GenresId }));
            setRelated(relatedResponse.filter(relatedMovie => relatedMovie.id !== fullMovie.id));
        }

        setIsLoading(false);
    };

    return {
        isLoading,
        movie,
        cast,
        related,
    };
};

