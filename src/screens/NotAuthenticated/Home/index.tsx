import React from 'react';
import { useWindowDimensions } from 'react-native';

import BannerDay from '~/assets/images/svg/day-banner.svg';
import PinIcon from '~/assets/icons/svg/pin.svg';
import HumidityIcon from '~/assets/icons/svg/humidity.svg';
import PressureIcon from '~/assets/icons/svg/pressure.svg';
import WindIcon from '~/assets/icons/svg/wind.svg';
import SunriseIcon from '~/assets/icons/svg/sunrise.svg';
import SunsetIcon from '~/assets/icons/svg/sunset.svg';
import DayTimeIcon from '~/assets/icons/svg/daytime.svg';
import ArrowUp from '~/assets/icons/svg/arrow-up.svg';
import ArrowDown from '~/assets/icons/svg/arrow-down.svg';

import { Container, Panel } from './styles';

const Home: React.FC = () => {
  const screenWidth = useWindowDimensions().width;

  const cards = [
    {
      title: '49%',
      subtitle: 'Humidity',
      icon: <HumidityIcon />
    },
    {
      title: '1,007mBar',
      subtitle: 'Pressure',
      icon: <PressureIcon />
    },
    {
      title: '23 km/h',
      subtitle: 'Wind',
      icon: <WindIcon />
    },
    {
      title: '6:03 AM',
      subtitle: 'Sunrise',
      icon: <SunriseIcon />
    },
    {
      title: '7:05 PM',
      subtitle: 'Sunset',
      icon: <SunsetIcon />
    },
    {
      title: '13h 1m',
      subtitle: 'Daytime',
      icon: <DayTimeIcon />
    }
  ];

  return (
    <Container>
      <BannerDay width={screenWidth} />
      <Panel.Container>
        <Panel.Header>
          <Panel.HeaderText>Sunday, 19 may 2019 | 4:30PM</Panel.HeaderText>
          <Panel.Geolocation>
            Mumbai, India <PinIcon />
          </Panel.Geolocation>
        </Panel.Header>
        <Panel.Main>
          <Panel.Row>
            <Panel.Card>
              <Panel.WeatherIcon
                source={{ uri: 'https://openweathermap.org/img/wn/10d@2x.png' }}
              />
              <Panel.WeatherText>Sunny</Panel.WeatherText>
            </Panel.Card>
            <Panel.Card flexDirection="row">
              <Panel.Temperature>33</Panel.Temperature>
              <Panel.Measure>°C</Panel.Measure>
            </Panel.Card>
            <Panel.Card>
              <Panel.CurrentTemp>
                35°C
                <ArrowUp />
              </Panel.CurrentTemp>
              <Panel.CurrentTemp>
                27°C
                <ArrowDown />
              </Panel.CurrentTemp>
            </Panel.Card>
          </Panel.Row>
          <Panel.Row>
            {cards.map((card) => (
              <Panel.Card>
                {card.icon}
                <Panel.CartTitle>{card.title}</Panel.CartTitle>
                <Panel.CardSubtitle>{card.subtitle}</Panel.CardSubtitle>
              </Panel.Card>
            ))}
          </Panel.Row>
        </Panel.Main>
      </Panel.Container>
    </Container>
  );
};

export default Home;
