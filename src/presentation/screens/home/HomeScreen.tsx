/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import { useMovies } from '../../hooks/useMovies';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Movie } from '../../../core/entities/movie.entity';
import { MovieElement } from '../../components/movies/MovieElement';

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const { isLoading, nowPlaying } = useMovies();

    if (isLoading) {
        return <Text>Cargando...</Text>;
    }

    const sortAlphabetically = (movies: Movie[]): Movie[] => {
        return movies.sort((a, d) => {
            if (a.title < d.title) { return -1; }
            if (a.title > d.title) { return 1; }
            return 0;
        });
    };

    return (
        <ScrollView>
            <Text style={{ fontSize: 30 }}>En Cartelera</Text>
            <View style={{ marginTop: top + 20, paddingBottom: 30 }}>
                {
                    sortAlphabetically(nowPlaying).map(movie => <MovieElement key={movie.id} movie={movie} />)
                }
            </View>
        </ScrollView>
    );
};
