/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { Movie } from '../../../core/entities/movie.entity';
import { RootStackParams } from '../../navigation/Navigation';
import { StarIcon } from '../../../assets/StarIcon';
import { HeartIcon } from '../../../assets/HeartIcon';

interface Props {
  movie: Movie;
  favorites: Record<string, Movie> | undefined;
  editFavorites: (movie: Movie) => Promise<void>
}

export const MovieElement = ({ movie, favorites, editFavorites }: Props) => {
  const { width: screenWidth } = useWindowDimensions();
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <Pressable
      onPress={() => navigation.navigate('Details', { movieId: movie.id })}
      style={({ pressed }) => ({
        opacity: pressed ? 0.9 : 1,
      })}
      aria-label='container'
    >
      <View style={styles.container}>
        <View style={styles.imageCointainer}>
          <Image
            style={styles.image}
            source={{ uri: movie.poster }}
          />
        </View>
        <View style={{ ...styles.info, width: screenWidth - 150 }}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text>
            {
              movie.releaseDate.toLocaleDateString('es-ES', {
                day: 'numeric', month: 'long', year: 'numeric',
              })
            }
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row' }}>
              <StarIcon width={20} height={20} />
              <Text>{movie.rating.toFixed(2)}</Text>
            </View>
            {
              !!favorites && (
                <Pressable
                  aria-label='heart-icon'
                  onPress={() => editFavorites(movie)}
                >
                  <View style={{ marginLeft: 15 }}>
                    <HeartIcon width={20} height={20} fill={!!favorites![movie.id]} />
                  </View>
                </Pressable>
              )
            }
          </View>
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
    fontWeight: 'black',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

