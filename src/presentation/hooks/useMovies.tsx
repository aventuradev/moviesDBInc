import { useEffect, useState } from 'react';
import { Movie } from '../../core/entities/movie.entity';

import * as UseCases from '../../core/use-cases';
import { movieDBAxiosFetcher } from '../../config/adapters/movieDB.adapter';

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);

    useEffect(() => {

        initialLoad();

    }, []);

    const initialLoad = async () => {
        const nowPlayingMovies = await UseCases.moviesNowPlayingUseCase(movieDBAxiosFetcher());
        setNowPlaying(nowPlayingMovies);
        setIsLoading(false);
    };

    return {
        isLoading,
        nowPlaying,
    };
};

