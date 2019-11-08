import React from 'react'
import { render } from 'react-dom'
import { ModalProvider } from 'react-modal-hook'
import { TransitionGroup } from 'react-transition-group'
import pages from './pages'

import './index.scss'
import 'utils/setupIcons'

const rootElement = document.getElementById('root')

render((
  <ModalProvider container={TransitionGroup}>
    {pages}
  </ModalProvider>
),
rootElement
)
