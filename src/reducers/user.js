import { createReducer } from '../utils/redux'
import * as ActionTypes from 'constants/ActionTypes'

const initialState = {
  user: null,
  token: null
}

export default createReducer(initialState, {
  [ActionTypes.USER_SET_USER]: (state, action) => {
    const { payload } = action
    const { user, token } = payload

    return {
      ...state,
      user,
      token
    }
  }
})
