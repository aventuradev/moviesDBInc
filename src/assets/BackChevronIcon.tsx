import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const BackChevronIcon = ({ size = 24, color = 'black', shadowColor = 'black' }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
  >
    {/* Shadow Path */}
    <Path
      d="M15 19L9 12L15 5"
      stroke={shadowColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="translate(3, 1)" // Offset shadow for a subtle effect
    />
    {/* Chevron Path */}
    <Path
      d="M15 19L9 12L15 5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
