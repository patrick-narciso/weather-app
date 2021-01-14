import React from 'react';
import { useWindowDimensions } from 'react-native';
import dayjs from 'dayjs';

import { ImageBackground } from './styles';

const Banner: React.FC = () => {
  const screenWidth = useWindowDimensions().width;
  const hours = Number(dayjs().format('HH'));
  const isDayTime = hours > 6 && hours < 20;

  if (isDayTime) {
    return (
      <ImageBackground
        source={require('~/assets/images/png/day-banner.png')}
        screenWidth={screenWidth}
      />
    );
  }
  return (
    <ImageBackground
      source={require('~/assets/images/png/night-banner.png')}
      screenWidth={screenWidth}
    />
  );
};

export default Banner;
