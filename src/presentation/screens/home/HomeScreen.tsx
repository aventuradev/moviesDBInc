/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import { useMovies } from '../../hooks/useMovies';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Movie } from '../../../core/entities/movie.entity';
import { MovieElement } from '../../components/movies/MovieElement';
import { FullScreenLoader } from '../../components/loaders/FullScreenLoaders';
import { useAuth } from '../../hooks/useAuth';
import { useFavorites } from '../../hooks/useFavorites';
import { useFocusEffect } from '@react-navigation/native';
import { Favorites } from '../../components/movies/Favorites';

export const HomeScreen = () => {

    useAuth();
    const { top } = useSafeAreaInsets();
    const { isLoading, nowPlaying } = useMovies();
    const { favorites, editFavorites, loadFavorites } = useFavorites();

    useFocusEffect(
        useCallback(() => {
            loadFavorites();
        }, [])
    );

    if (isLoading) {
        return <FullScreenLoader />;
    }

    const sortAlphabetically = (movies: Movie[]): Movie[] => {
        return movies.sort((a, d) => {
            if (a.title < d.title) { return -1; }
            if (a.title > d.title) { return 1; }
            return 0;
        });
    };

    return (
        <ScrollView style={{ padding: 5 }}>
            {
                Object.entries(favorites).length ? (
                    <Favorites favorites={favorites} />
                ) : (<></>)
            }
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>En Cartelera</Text>
            <View style={{ marginTop: top + 20, paddingBottom: 30 }}>
                {
                    sortAlphabetically(nowPlaying).map(movie => <MovieElement key={movie.id} movie={movie} favorites={favorites} editFavorites={editFavorites} />)
                }
            </View>
        </ScrollView>
    );
};
