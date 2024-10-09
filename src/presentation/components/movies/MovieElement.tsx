import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Movie } from '../../../core/entities/movie.entity';

interface Props {
  movie: Movie;
}

export const MovieElement = ({ movie }: Props) => {
  return (
    <Pressable>
      <View style={styles.container}>
        <View style={styles.imageCointainer}>
          <Image
            style={styles.image}
            source={{ uri: movie.poster }}
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text>{movie.releaseDate.toLocaleDateString('es-ES', {
            day: 'numeric',   // Día del mes
            month: 'long',
            year: 'numeric',
          }
          )}</Text>
          <Text>Resting: {movie.rating.toFixed(2)} / 10</Text>
        </View>
      </View>
    </Pressable>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 15,
  },
  image: {
    flex: 1,
    borderRadius: 10,
  },
  imageCointainer: {
    width: 140,
    height: 200,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,
  },
  info: {
    padding: 5,
    width: 250,
    fontWeight: 'black',
  },
  title: {
    fontSize: 18,
  },
});

