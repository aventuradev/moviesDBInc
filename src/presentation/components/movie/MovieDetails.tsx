/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { FullMovie, Movie } from '../../../core/entities/movie.entity';
import { Cast } from '../../../core/entities/cast.entity';
import { FlatList, Pressable } from 'react-native-gesture-handler';
import { CastActor } from '../cast/CastActor';
import { RelatedMovie } from './RelatedMovie';
import { StarIcon } from '../../../assets/StarIcon';
import { HeartIcon } from '../../../assets/HeartIcon';
import { useFavorites } from '../../hooks/useFavorites';

interface Props {
    movie: FullMovie;
    cast: Cast[];
    related: Movie[];
    rateMovie: (movieId: number, value: number) => void;
}

export const MovieDetails = ({ movie, cast, related, rateMovie }: Props) => {
    const { favorites, editFavorites } = useFavorites();
    return (
        <>
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text>{movie.rating.toFixed(2)}</Text>
                    <StarIcon width={20} height={20} />
                    <Text style={{ marginLeft: 5 }}>
                        - {movie.genres.map(genre => genre.name).join(', ')}
                    </Text>
                    {
                        !!favorites && (
                            <Pressable
                                onPress={() => editFavorites(movie)}
                            >
                                <View style={{ marginLeft: 15 }}>
                                    <HeartIcon width={20} height={20} fill={!!favorites![movie.id]} />
                                </View>
                            </Pressable>
                        )
                    }
                </View>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Historia
                </Text>
                <Text style={{ fontSize: 16 }}>
                    {movie.description}
                </Text>
                {/* Rating */}
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Calificar
                </Text>
                <View>
                    <AirbnbRating
                        defaultRating={Math.round(movie.rating / 2)}
                        count={5}
                        showRating={false}
                        onFinishRating={(vote: number) => rateMovie(movie.id, vote * 2)}
                        size={25}
                    />
                </View>
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

            <View style={{ marginBottom: 20, marginHorizontal: 20 }}>
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
