export const Actions = {
  FETCH_CURRENT_WEATHER_START: 'WEATHER/FETCH_CURRENT_WEATHER_START',
  FETCH_CURRENT_WEATHER_SUCCESS: 'WEATHER/FETCH_CURRENT_WEATHER_SUCCESS',
  FETCH_CURRENT_WEATHER_FAILURE: 'WEATHER/FETCH_CURRENT_WEATHER_FAILURE'
};

export interface WeatherModuleState {
  weatherData: CurrentWeather | null;
  loading: boolean;
  error: string | null;
}

interface CurrentWeather {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

type ActionTypes =
  | typeof Actions.FETCH_CURRENT_WEATHER_START
  | typeof Actions.FETCH_CURRENT_WEATHER_SUCCESS
  | typeof Actions.FETCH_CURRENT_WEATHER_FAILURE;

export interface WeatherModuleAction {
  type: ActionTypes;
  payload?: any;
}
