import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchWeatherSuccess, fetchWeatherFail } from './../actions/weather';
import actionTypes from './../actions';
import axios from 'axios';

const weatherApiUrl = location => (
  `https://query.yahooapis.com/v1/public/yql?q=select%20item.condition.text%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D"${location}")&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`
);

function* fetchWeather({location}) {
  try {
    const {data: {query: {results: {channel: {item: {condition: { text }}}}}}} = yield axios.get(weatherApiUrl(location));
    yield put(fetchWeatherSuccess(text));
  } catch ({message}) {
    yield put(fetchWeatherFail(message));
  }
}

function* weatherSaga() {
  yield takeEvery(actionTypes.WEATHER_FETCH_START, fetchWeather);
}

export default weatherSaga;
