import actionTypes from './index';

const fetchWeatherStart = location => ({
  type: actionTypes.WEATHER_FETCH_START,
  location
});

const fetchWeatherSuccess = weatherResult => ({
  type: actionTypes.WEATHER_FETCH_SUCCESS,
  weatherResult
});

const fetchWeatherFail = error => ({
  type: actionTypes.WEATHER_FETCH_FAIL,
  error
});

export {
  fetchWeatherStart,
  fetchWeatherSuccess,
  fetchWeatherFail
}
