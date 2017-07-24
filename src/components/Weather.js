// @flow
import React from 'react';
import cities from './../data/cities';
import type WeatherStateType from './../reducers/weather';

const Weather = ({
  location,
  weatherResult,
  fetchedFromServer,
  isFetching,
  fetchError,
  goFetch
}: {
  location: string,
  fetchedFromServer: boolean,
  isFetching: boolean,
  fetchError: boolean | string,
  weatherResult: ?string,
  goFetch: (location: string) => void
}) => (
  <div>
    <h1>Showing weather for {location}</h1>
    <select onChange={event => goFetch(event.target.value)} value={location}>
      {cities.map((city, index) => (
        <option value={city} key={index}>{city}</option>
      ))}
    </select>
    <p>
      {isFetching ? `Fetching weather for ${location}...` : (fetchError ? fetchError : <em>{weatherResult}</em>)}
    </p>
  </div>
)

export { Weather };
