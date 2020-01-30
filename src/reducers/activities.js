import { createReducer } from '../utils/redux'
import * as ActionTypes from 'constants/ActionTypes'

const initialState = {
  error: null,
  isLoading: false,
  activities: []
}

export default createReducer(initialState, {
  [ActionTypes.ACTIVITIES_LOAD_START]: (state) => {
    return {
      ...state,
      isLoading: true
    }
  },
  [ActionTypes.ACTIVITIES_LOAD_SUCCESS]: (state, { payload: activities }) => {
    return {
      ...state,
      isLoading: false,
      activities
    }
  },
  [ActionTypes.ACTIVITIES_LOAD_ERROR]: (state, { payload: error }) => {
    return {
      ...state,
      isLoading: false,
      error
    }
  }
})
