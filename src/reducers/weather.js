// @flow
import actionTypes from './../actions';

type WeatherActionType = {
  type: string,
  error?: boolean | string,
  weatherResult?: string | null,
  location?: string
};

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

const weather = (state: WeatherStateType = defaultState, action: WeatherActionType): WeatherStateType => {

  switch (action.type) {

    case actionTypes.WEATHER_FETCH_START:
      return {
        ...state,
        isFetching: true,
        fetchError: false,
        location: action.location
      };

    case actionTypes.WEATHER_FETCH_SUCCESS:
      return {
        ...state,
        fetchedFromServer: true,
        isFetching: false,
        fetchError: false,
        weatherResult: action.weatherResult
      };

    case actionTypes.WEATHER_FETCH_FAIL:
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
