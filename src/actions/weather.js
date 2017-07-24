// @flow
export type FetchWeatherStartAction = {
  type: 'WEATHER_FETCH_START',
  location: string
};
const fetchWeatherStart = (location: string): FetchWeatherStartAction => ({
  type: 'WEATHER_FETCH_START',
  location
});

export type FetchWeatherSuccessAction = {
  type: 'WEATHER_FETCH_SUCCESS',
  weatherResult: ?string
};
const fetchWeatherSuccess = (weatherResult: ?string): FetchWeatherSuccessAction => ({
  type: 'WEATHER_FETCH_SUCCESS',
  weatherResult
});

export type FetchWeatherFailAction = {
  type: 'WEATHER_FETCH_FAIL',
  error: string | false
};
const fetchWeatherFail = (error: string | false): FetchWeatherFailAction => ({
  type: 'WEATHER_FETCH_FAIL',
  error
});

export type WeatherAction =
| FetchWeatherStartAction
| FetchWeatherSuccessAction
| FetchWeatherFailAction;

export {
  fetchWeatherStart,
  fetchWeatherSuccess,
  fetchWeatherFail
};
