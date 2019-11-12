import 'babel-polyfill'

import { render } from 'react-dom'
import pages from './pages'

import './index.scss'
import 'utils/setupIcons'

const rootElement = document.getElementById('root')

render(
  pages,
  rootElement
)
