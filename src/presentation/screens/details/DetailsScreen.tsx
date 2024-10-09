import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import { RootStackParams } from '../../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'Details'> { }

export const DetailsScreen = ({ route }: Props) => {
    const { movieId } = route.params;
    console.log(movieId)
    return (
        <View>
            <Text>Details</Text>
        </View>
    );
};
