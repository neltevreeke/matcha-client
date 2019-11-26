import { createReducer } from '../utils/redux'
import * as ActionTypes from 'constants/ActionTypes'

const initialState = []

export default createReducer(initialState, {
  [ActionTypes.SET_ONLINE_USERS]: (state, { payload: onlineUsers }) => {
    return onlineUsers
  }
})
