// @flow
import actionTypes from './index';

type FetchWeatherStartAction = {
  type: string,
  location: string
};

type FetchWeatherSuccessAction = {
  type: string,
  weatherResult: ?string
};

type FetchWeatherFailAction = {
  type: string,
  error: string | false
};

const fetchWeatherStart = (location: string): FetchWeatherStartAction => ({
  type: actionTypes.WEATHER_FETCH_START,
  location
});

const fetchWeatherSuccess = (weatherResult: ?string): FetchWeatherSuccessAction => ({
  type: actionTypes.WEATHER_FETCH_SUCCESS,
  weatherResult
});

const fetchWeatherFail = (error: string | false): FetchWeatherFailAction => ({
  type: actionTypes.WEATHER_FETCH_FAIL,
  error
});

export {
  fetchWeatherStart,
  fetchWeatherSuccess,
  fetchWeatherFail
}
