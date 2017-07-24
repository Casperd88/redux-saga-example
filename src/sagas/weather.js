// @flow
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { fetchWeatherSuccess, fetchWeatherFail } from './../actions/weather';
import type {FetchWeatherSuccessAction} from './../actions/weather';
import axios from 'axios';

const weatherApiUrl = (location: string) => (
  `https://query.yahooapis.com/v1/public/yql?q=select%20item.condition.text%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D"${location}")&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`
);

const fetchWeather = (location: string): Promise<> => {
  return axios(weatherApiUrl(location)).then(
    ({data:{query:{results:{channel:{item:{condition:{text}}}}}}}) => text
  );
}

function* callFetchWeather({location}: {location: string}) {
  try {
    const result = yield call(fetchWeather, location);
    yield put(fetchWeatherSuccess(result));
  } catch (message) {
    yield put(fetchWeatherFail(message.error));
  }
}

function* weatherSaga(): Generator<> {
  yield takeEvery('WEATHER_FETCH_START', callFetchWeather);
}

export default weatherSaga;
