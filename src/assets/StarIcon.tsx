import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  height: number;
  width: number;
}

export const StarIcon = ({ height, width }: Props) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width || 24}
    height={height || 24}
    fill="gold"
  >
    <Path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21 12 17.27z" />
  </Svg>
);
