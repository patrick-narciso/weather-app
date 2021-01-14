import HttpClient from '~/utils/http-client';
import { OPEN_WEATHER_URL, OPEN_WEATHER_KEY } from '@env';

class WeatherServiceApi extends HttpClient {
  public constructor() {
    super(OPEN_WEATHER_URL);
  }

  public getCurrentWeather = (lat: number, lon: number) => {
    return this.instance.get(
      `/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_KEY}&lang=pt_br&units=metric`
    );
  };
}

export const WeatherService = new WeatherServiceApi();
