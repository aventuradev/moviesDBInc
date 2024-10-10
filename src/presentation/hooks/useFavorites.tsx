import { useState, useEffect } from 'react';
import { Movie } from '../../core/entities/movie.entity';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useFavorites = () => {
    const [favorites, setFavorites] = useState<Record<string, Movie>>({});

    const editFavorites = async (movie: Movie) => {
        const data = { [movie.id]: movie };
        if (!favorites) { // favorite list is empty. Create list
            await AsyncStorage.setItem('favorites', JSON.stringify(data));
            setFavorites(data);

        } else if (!favorites[movie.id]) { // movie not in favorite. Add movie
            await AsyncStorage.setItem('favorites', JSON.stringify({ ...favorites, ...data }));
            setFavorites({ ...favorites, ...data });

        } else { // movie in favorite. Remove movie
            const favCopy = JSON.parse(JSON.stringify(favorites));
            delete favCopy[movie.id];
            await AsyncStorage.setItem('favorites', JSON.stringify(favCopy));
            setFavorites(favCopy);
        }

    };

    const loadFavorites = async () => {
        const favoritesInStorage = await AsyncStorage.getItem('favorites');
        if (favoritesInStorage) {
            setFavorites(JSON.parse(favoritesInStorage!));
        }
    };
    useEffect(() => {
        loadFavorites();
    }, []);


    return {
        favorites,
        editFavorites,
        loadFavorites,
    };
};
