import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { Movie } from '../../../core/entities/movie.entity';
import { RootStackParams } from '../../navigation/Navigation';

interface Props {
  movie: Movie;
}

export const MovieElement = ({ movie }: Props) => {
  const { width: screenWidth } = useWindowDimensions();
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  return (
    <Pressable
      onPress={() => navigation.navigate('Details', { movieId: movie.id })}
      style={({ pressed }) => ({
        opacity: pressed ? 0.9 : 1,
      })}
    >
      <View style={styles.container}>
        <View style={styles.imageCointainer}>
          <Image
            style={styles.image}
            source={{ uri: movie.poster }}
          />
        </View>
        <View style={{...styles.info, width: screenWidth - 150}}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text>
            {
              movie.releaseDate.toLocaleDateString('es-ES', {
                day: 'numeric', month: 'long', year: 'numeric',
              })
            }
          </Text>
          <Text>{movie.rating.toFixed(2)} / 10</Text>
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

