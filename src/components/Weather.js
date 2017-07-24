import React from 'react';
import cities from './../data/cities';

const Weather = ({
  location,
  weatherResult,
  fetchedFromServer,
  isFetching,
  fetchError,
  goFetch
}) => (
  <div>
    <h1>Weather Saga</h1>
    <select onChange={event => goFetch(event.target.value)}>
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
