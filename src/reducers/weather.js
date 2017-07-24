import actionTypes from './../actions';

const defaultState = {
  location: 'Barcelona',
  fetchedFromServer: false,
  isFetching: false,
  fetchError: false,
  weatherResult: null
};

const weather = (state = defaultState, action) => {

  switch (action.type) {

    case actionTypes.WEATHER_FETCH_FAIL:
      return {
        ...state,
        fetchedFromServer: false,
        isFetching: false,
        fetchError: action.error
      };

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

    default:
      return state;
  }

};

export default weather;
