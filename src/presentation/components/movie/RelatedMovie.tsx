/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Movie } from '../../../core/entities/movie.entity';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/Navigation';

interface Props {
    movie: Movie;
}

export const RelatedMovie = ({ movie }: Props) => {
    const navigation = useNavigation<NavigationProp<RootStackParams>>();
    return (
        <Pressable
            onPress={() => navigation.navigate('Details', { movieId: movie.id })}
            style={({ pressed }) => ({
                opacity: pressed ? 0.9 : 1,
            })}
        >
            <View style={styles.container}>
                <Image
                    source={{ uri: movie.poster }}
                    style={{ width: 100, height: 150, borderRadius: 10 }}
                />

                <View style={styles.actorInfo}>
                    <Text style={{ fontSize: 12, opacity: 0.7 }}>{movie.title}</Text>
                </View>
            </View>
        </Pressable>
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
