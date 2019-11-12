import 'babel-polyfill'

import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import pages from './pages'
import configureStore from './utils/configureStore'

import './index.scss'
import 'utils/setupIcons'

const rootElement = document.getElementById('root')

const store = configureStore()

render((
  <Provider store={store}>
    {pages}
  </Provider>
), rootElement
)
