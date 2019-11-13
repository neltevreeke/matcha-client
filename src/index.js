import 'babel-polyfill'

import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import pages from './pages'
import configureStore from './utils/configureStore'
import { getToken } from 'utils/token'

import './index.scss'
import 'utils/setupIcons'
import { setTokenHeader } from './utils/request'

const rootElement = document.getElementById('root')

const store = configureStore()
const token = getToken()

if (token) {
  setTokenHeader(token)
}

render((
  <Provider store={store}>
    {pages}
  </Provider>
), rootElement
)
