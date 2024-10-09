import { useEffect, useState } from 'react';
import * as UseCases from '../../core/use-cases'
import { Genre } from '../../infraestructure/interfaces/movie-db.responses';
import { genreDBAxiosFetcher } from '../../config/adapters/genreDB.adapter';

export const useGenre = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [genres, setGenres] = useState<Genre[]>();

    useEffect(() => {
        loadGenres();
    }, [])


    const loadGenres = async () => {
        setIsLoading(true)
        const genres = await UseCases.getGenresListUsecase(genreDBAxiosFetcher);

        setGenres(genres);
        setIsLoading(false);
    }
    return {
        isLoading,
        genres
    }
}