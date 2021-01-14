import React, { useEffect } from 'react';
import { Platform, Button, DevSettings } from 'react-native';
import dayjs from 'dayjs';
import Geolocation from '@react-native-community/geolocation';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { useDispatch } from 'react-redux';

import PinIcon from '~/assets/icons/svg/pin.svg';
import HumidityIcon from '~/assets/icons/svg/humidity.svg';
import PressureIcon from '~/assets/icons/svg/pressure.svg';
import WindIcon from '~/assets/icons/svg/wind.svg';
import SunriseIcon from '~/assets/icons/svg/sunrise.svg';
import SunsetIcon from '~/assets/icons/svg/sunset.svg';
import DayTimeIcon from '~/assets/icons/svg/daytime.svg';
import ArrowUp from '~/assets/icons/svg/arrow-up.svg';
import ArrowDown from '~/assets/icons/svg/arrow-down.svg';

import { getCurrentWeather } from '~/modules/weather/duck';
import { capitalize } from '~/utils/formatters';
import { useTypedSelector } from '~/reducers';
import { Spinner, Banner } from '~/components';

import { OPEN_WEATHER_ICON_URL } from '@env';

import { Container, Panel } from './styles';
import { HomeProps } from './types';

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { weatherData, loading, error } = useTypedSelector(
    (state) => state.weather
  );
  const isAndroid = Platform.OS === 'android';
  const locationPlatform = isAndroid
    ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
    : PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;

  useEffect(() => {
    if (error !== null) {
      navigation.navigate('Error', {
        message: 'Ocorreu um problema, tente novamente'
      });
    }
  }, [error, navigation]);

  useEffect(() => {
    (async function () {
      const result = await request(locationPlatform);
      if (result === RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(({ coords }) => {
          const { latitude, longitude } = coords;
          dispatch(getCurrentWeather(latitude, longitude));
        });
      } else {
        navigation.navigate('Error', {
          message: 'Ocorreu um problema, é necessário acesso à sua localização'
        });
      }
    })();
  }, [dispatch, locationPlatform, navigation]);

  const cards = [
    {
      title: `${weatherData?.main.humidity}%`,
      subtitle: 'Umidade',
      icon: <HumidityIcon />
    },
    {
      title: `${weatherData?.main.pressure}mBar`,
      subtitle: 'Pressão',
      icon: <PressureIcon />
    },
    {
      title: `${weatherData?.wind.speed} km/h`,
      subtitle: 'Vento',
      icon: <WindIcon />
    },
    {
      title: dayjs.unix(weatherData?.sys.sunrise).format('HH:mm'),
      subtitle: 'Nascer do Sol',
      icon: <SunriseIcon />
    },
    {
      title: dayjs.unix(weatherData?.sys.sunset).format('HH:mm'),
      subtitle: 'Pôr do Sol',
      icon: <SunsetIcon />
    },
    {
      title: '13h 1m',
      subtitle: 'Dia',
      icon: <DayTimeIcon />
    }
  ];

  if (loading) {
    return <Spinner />;
  }

  return (
    <Container>
      <Banner />
      <Panel.Container>
        <Panel.Header>
          <Panel.HeaderText>
            {dayjs().format('dddd, D MMM YYYY  |  HH:mm')}
          </Panel.HeaderText>
          <Panel.Geolocation>
            {weatherData?.name} <PinIcon />
          </Panel.Geolocation>
        </Panel.Header>
        <Panel.Main>
          <Panel.Row>
            <Panel.Card>
              <Panel.WeatherIcon
                source={{
                  uri: `${OPEN_WEATHER_ICON_URL}/${weatherData?.weather[0].icon}@2x.png`
                }}
              />
              <Panel.WeatherText>
                {capitalize(weatherData?.weather[0].description)}
              </Panel.WeatherText>
            </Panel.Card>
            <Panel.Card flexDirection="row">
              <Panel.Temperature>
                {parseInt(weatherData?.main.temp, 10)}
              </Panel.Temperature>
              <Panel.Measure>°C</Panel.Measure>
            </Panel.Card>
            <Panel.Card>
              <Panel.CurrentTemp>
                {parseInt(weatherData?.main.temp_max, 10)}°C
                <ArrowUp />
              </Panel.CurrentTemp>
              <Panel.CurrentTemp>
                {parseInt(weatherData?.main.temp_min, 10)}°C
                <ArrowDown />
              </Panel.CurrentTemp>
            </Panel.Card>
          </Panel.Row>
          <Panel.Row>
            {cards.map((card) => (
              <Panel.Card key={card.subtitle}>
                {card.icon}
                <Panel.CartTitle>{card.title}</Panel.CartTitle>
                <Panel.CardSubtitle>{card.subtitle}</Panel.CardSubtitle>
              </Panel.Card>
            ))}
          </Panel.Row>
          <Button title="Atualizar" onPress={() => DevSettings.reload()} />
        </Panel.Main>
      </Panel.Container>
    </Container>
  );
};

export default Home;
