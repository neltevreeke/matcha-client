import 'babel-polyfill'

import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import pages from './pages'
import configureStore from './utils/configureStore'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './index.scss'
import 'utils/setupIcons'

const rootElement = document.getElementById('root')

export const store = configureStore()

toast.configure({
  position: toast.POSITION.TOP_RIGHT
})

render((
  <Provider store={store}>
    {pages}
  </Provider>
), rootElement
)
