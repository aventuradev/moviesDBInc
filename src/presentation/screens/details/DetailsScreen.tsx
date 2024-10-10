import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/Navigation';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { MovieDetails } from '../../components/movie/MovieDetails';
import { ScrollView } from 'react-native-gesture-handler';
import { FullScreenLoader } from '../../components/loaders/FullScreenLoaders';

interface Props extends StackScreenProps<RootStackParams, 'Details'> { }

export const DetailsScreen = ({ route }: Props) => {
    const { movieId } = route.params;
    const { isLoading, movie, cast, related, rateMovie } = useMovie(movieId);

    if (isLoading) {
        return <FullScreenLoader />;
    }
    return (
        <ScrollView>
            <MovieHeader
                poster={movie!.poster}
                originalTitle={movie!.originalTitle}
                title={movie!.title}
                releaseDate={movie!.releaseDate}
            />
            <MovieDetails movie={movie!} cast={cast!} related={related!} rateMovie={rateMovie} />
        </ScrollView>
    );
};
