// @flow
import type { WeatherAction } from './../actions/weather';

export type WeatherStateType = {
  location: string,
  fetchedFromServer: boolean,
  isFetching: boolean,
  fetchError: boolean | string,
  weatherResult: ?string
};

const defaultState: WeatherStateType = {
  location: 'Barcelona',
  fetchedFromServer: false,
  isFetching: false,
  fetchError: false,
  weatherResult: null
};

const weather = (state: WeatherStateType = defaultState, action: WeatherAction): WeatherStateType => {

  switch (action.type) {

    case 'WEATHER_FETCH_START':
      return {
        ...state,
        isFetching: true,
        fetchError: false,
        location: action.location
      };

    case 'WEATHER_FETCH_SUCCESS':
      return {
        ...state,
        fetchedFromServer: true,
        isFetching: false,
        fetchError: false,
        weatherResult: action.weatherResult
      };

    case 'WEATHER_FETCH_FAIL':
      return {
        ...state,
        fetchedFromServer: false,
        isFetching: false,
        fetchError: action.error
      };

    default:
      return state;
  }

};

export default weather;
