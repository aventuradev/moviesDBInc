/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Movie } from '../../../core/entities/movie.entity';

interface Props {
    movie: Movie;
}

export const RelatedMovie = ({ movie }: Props) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: movie.poster }}
                style={{ width: 100, height: 150, borderRadius: 10 }}
            />

            <View style={styles.actorInfo}>
                <Text style={{ fontSize: 12, opacity: 0.7 }}>{movie.title}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginRight: 10,
        paddingLeft: 10,
        display: 'flex',
        flexDirection: 'column',
        width: 100,
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 4,
    },
});
