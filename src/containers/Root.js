import React from 'react';
import { Provider } from 'react-redux';
import Store from './../reducers';
import { App } from './App';

export default () => (
  <Provider store={Store}>
    <App/>
  </Provider>
);
