import { Actions, WeatherModuleState, WeatherModuleAction } from './types';
import { Dispatch } from '~/commons/types';
import { WeatherService } from '~/services/Weather';

const INITIAL_STATE: WeatherModuleState = {
  loading: false,
  error: null,
  weatherData: null
};

// Reducer
export default function reducer(
  state = INITIAL_STATE,
  action: WeatherModuleAction
) {
  switch (action.type) {
    case Actions.FETCH_CURRENT_WEATHER_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case Actions.FETCH_CURRENT_WEATHER_SUCCESS:
      return {
        ...state,
        weatherData: action.payload,
        loading: false,
        error: null
      };
    case Actions.FETCH_CURRENT_WEATHER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        weatherData: null
      };
    default:
      return state;
  }
}

// Action Creators
export function getCurrentWeather(lat: number, lon: number) {
  return async (dispatch: Dispatch) => {
    dispatch({ type: Actions.FETCH_CURRENT_WEATHER_START });
    try {
      const weatherData = await WeatherService.getCurrentWeather(lat, lon);
      dispatch({
        type: Actions.FETCH_CURRENT_WEATHER_SUCCESS,
        payload: weatherData
      });
    } catch (error) {
      dispatch({ type: Actions.FETCH_CURRENT_WEATHER_FAILURE, payload: error });
    }
  };
}
