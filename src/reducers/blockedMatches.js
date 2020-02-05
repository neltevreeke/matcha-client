import { createReducer } from '../utils/redux'
import * as ActionTypes from 'constants/ActionTypes'

const initialState = {
  error: null,
  isLoading: false,
  blockedUsers: []
}

export default createReducer(initialState, {
  [ActionTypes.BLOCK_MATCH_START]: (state) => {
    return {
      ...state,
      isLoading: true
    }
  },
  [ActionTypes.BLOCK_MATCH_SUCCESS]: (state, { payload: blockedUsers }) => {
    return {
      ...state,
      isLoading: false,
      blockedUsers
    }
  },
  [ActionTypes.BLOCK_MATCH_ERROR]: (state, { payload: error }) => {
    return {
      ...state,
      isLoading: false,
      error
    }
  }
})
