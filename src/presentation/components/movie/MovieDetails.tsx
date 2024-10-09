/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import { FullMovie, Movie } from '../../../core/entities/movie.entity';
import { Formatter } from '../../../config/helpers/formatter';
import { Cast } from '../../../core/entities/cast.entity';
import { FlatList } from 'react-native-gesture-handler';
import { CastActor } from '../cast/CastActor';
import { RelatedMovie } from './RelatedMovie';

interface Props {
    movie: FullMovie;
    cast: Cast[];
    related: Movie[];
}

export const MovieDetails = ({ movie, cast, related }: Props) => {
    return (
        <>
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text>{movie.rating.toFixed(2)} / 10</Text>
                    <Text style={{ marginLeft: 5 }}>
                        - {movie.genres.map(genre => genre.name).join(', ')}
                    </Text>
                </View>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Historia
                </Text>
                <Text style={{ fontSize: 16 }}>
                    {movie.description}
                </Text>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Presupuesto
                </Text>
                <Text style={{ fontSize: 16 }}>
                    {Formatter.currency(movie.budget)}
                </Text>
            </View>
            {/* Casting */}

            <View style={{ marginTop: 5, marginBottom: 20, marginHorizontal: 20 }}>
                <Text style={{ fontSize: 23, marginVertical: 10, fontWeight: 'bold' }}>Actores</Text>
                <FlatList
                    data={cast}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <CastActor actor={item} />}
                />
            </View>
            {/* Related */}

            <View style={{marginBottom: 20, marginHorizontal: 20 }}>
                <Text style={{ fontSize: 23, marginVertical: 10, fontWeight: 'bold' }}>Películas Recomendadas</Text>
                <FlatList
                    data={related}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <RelatedMovie movie={item} />}
                />
            </View>
        </>
    );
};
