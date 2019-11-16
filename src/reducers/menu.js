import { createReducer } from '../utils/redux'
import * as ActionTypes from 'constants/ActionTypes'

const initialState = {
  isOpen: false
}

export default createReducer(initialState, {
  [ActionTypes.MENU_TOGGLE]: (state, { payload: isOpen }) => {
    return {
      isOpen
    }
  }
})
