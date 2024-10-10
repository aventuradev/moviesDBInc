/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import { useMovies } from '../../hooks/useMovies';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Movie } from '../../../core/entities/movie.entity';
import { MovieElement } from '../../components/movies/MovieElement';
import { FullScreenLoader } from '../../components/loaders/FullScreenLoaders';
import { useAuth } from '../../hooks/useAuth';

export const HomeScreen = () => {

    useAuth();
    const { top } = useSafeAreaInsets();
    const { isLoading, nowPlaying } = useMovies();

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
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>En Cartelera</Text>
            <View style={{ marginTop: top + 20, paddingBottom: 30 }}>
                {
                    sortAlphabetically(nowPlaying).map(movie => <MovieElement key={movie.id} movie={movie} />)
                }
            </View>
        </ScrollView>
    );
};
