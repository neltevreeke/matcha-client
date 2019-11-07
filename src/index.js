import { render } from 'react-dom'
import pages from './pages'

import './index.scss'

const rootElement = document.getElementById('root')

render(
  pages,
  rootElement
)
