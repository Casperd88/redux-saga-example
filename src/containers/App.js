import React, { Component } from 'react';
import { Weather } from './../components/Weather';
import { connect } from 'react-redux';
import injectProps from 'react-inject-props-decorator';
import { fetchWeatherStart } from './../actions/weather';

const mapStateToProps = ({weather: weatherProps}) => ({weatherProps});

const mapDispatchToProps = dispatch => ({
  goFetch: location => dispatch(fetchWeatherStart(location))
});

@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {

  @injectProps
  componentWillMount({goFetch, weatherProps: {location}}) {
    goFetch(location);
  }

  @injectProps
  render({weatherProps, goFetch}) {
    return (
      <Weather name="Casper" goFetch={goFetch} {...weatherProps}/>
    )
  }
}

export { App };
