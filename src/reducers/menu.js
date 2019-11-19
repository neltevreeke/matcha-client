import { createReducer } from '../utils/redux'
import * as ActionTypes from 'constants/ActionTypes'

const initialState = {
  isOpen: false
}

export default createReducer(initialState, {
  [ActionTypes.MENU_OPEN]: (state, { payload: isOpen }) => {
    return {
      ...state,
      isOpen: true
    }
  },
  [ActionTypes.MENU_CLOSE]: (state, { payload: isOpen }) => {
    return {
      ...state,
      isOpen: initialState.isOpen
    }
  }
})
