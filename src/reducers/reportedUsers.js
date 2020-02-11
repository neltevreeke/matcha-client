import { createReducer } from '../utils/redux'
import * as ActionTypes from 'constants/ActionTypes'

const initialState = {
  error: null,
  isLoading: false,
  reportedUsers: []
}

export default createReducer(initialState, {
  [ActionTypes.REPORT_MATCH_START]: (state) => {
    return {
      ...state,
      isLoading: true
    }
  },
  [ActionTypes.REPORT_MATCH_SUCCESS]: (state, { payload: reportedUsers }) => {
    return {
      ...state,
      isLoading: false,
      reportedUsers
    }
  },
  [ActionTypes.REPORT_MATCH_ERROR]: (state, { payload: error }) => {
    return {
      ...state,
      isLoading: false,
      error
    }
  }
})
