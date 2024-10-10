/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Movie } from '../../../core/entities/movie.entity';
import { MovieDisplay } from '../movie/MovieDisplay';

interface Props {
    favorites: Record<string, Movie>
}
export const Favorites = ({favorites}: Props) => {
    return (
        <View style={{ marginBottom: 20, marginHorizontal: 20 }}>
            <Text style={{ fontSize: 18, marginVertical: 10, fontWeight: 'bold' }}>Favoritas</Text>
            <FlatList
                data={Object.values(favorites)}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <MovieDisplay movie={item} />}
            />
        </View>
    );
};
