import { createReducer } from '../utils/redux'
import * as ActionTypes from 'constants/ActionTypes'

const initialState = null

export default createReducer(initialState, {
  [ActionTypes.USER_SET_USER]: (state, action) => {
    return action.payload
  },
  [ActionTypes.USER_UNSET_USER]: () => {
    return initialState
  }
})
