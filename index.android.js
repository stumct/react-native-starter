// @flow
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import Router from './src/Routing'
import reducers from './src/Redux/Reducers'
import createLogger from 'redux-logger';

const logger = createLogger();
let store = createStore(reducers, applyMiddleware(logger))

AppRegistry.registerComponent('mcgames', () => () => <Provider store={store}><Router /></Provider>);
