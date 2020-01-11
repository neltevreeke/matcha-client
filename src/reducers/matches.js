import { createReducer } from '../utils/redux'
import * as ActionTypes from 'constants/ActionTypes'

const initialState = {
  isLoaded: false,
  error: null,
  isLoading: false,
  userMatches: null
}

export default createReducer(initialState, {
  [ActionTypes.MATCHES_LOAD_START]: (state) => {
    return {
      ...state,
      isLoading: true,
      error: null,
      userMatches: null
    }
  },
  [ActionTypes.MATCHES_LOAD_SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      isLoading: false,
      isLoaded: true,
      error: null,
      userMatches: payload
    }
  },
  [ActionTypes.MATCHES_LOAD_ERROR]: (state, { payload: error }) => {
    return {
      ...state,
      isLoading: false,
      isLoaded: true,
      error
    }
  }
})
