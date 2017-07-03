// @flow
import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Clock from '../Clock/Clock'
import Counters from '../Counters/Counters'
import reducers from '../../reducers/index'
import './App.css'

const store = createStore(reducers)

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Clock />
      <Counters />
    </div>
  </Provider>
)

export default App
