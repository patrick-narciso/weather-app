import React from 'react';

import ArrowUp from '~/assets/icons/svg/arrow-up.svg';
import ArrowDown from '~/assets/icons/svg/arrow-down.svg';

import { Container, Icon, Temps, Temp, Title } from './styles';

interface CardProps {
  iconPath: string;
  title: string;
  highTemp: number;
  lowTemp: number;
}

const Card: React.FC<CardProps> = ({ title, iconPath, highTemp, lowTemp }) => (
  <Container>
    <Icon source={{ uri: iconPath }} />
    <Title>{title}</Title>
    <Temps>
      <Temp>
        {highTemp}°C
        <ArrowUp />
      </Temp>
      <Temp>
        {lowTemp}°C
        <ArrowDown />
      </Temp>
    </Temps>
  </Container>
);

export default Card;
