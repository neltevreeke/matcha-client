import { createReducer } from '../utils/redux'
import * as ActionTypes from 'constants/ActionTypes'

const initialState = {
  error: null,
  isLoading: false,
  roomMessages: [],
  isLoaded: false
}

export default createReducer(initialState, {
  [ActionTypes.SET_NEW_ROOMMESSAGE]: (state, { payload: message }) => {
    return {
      ...state,
      roomMessages: [...state.roomMessages, message]
    }
  },
  [ActionTypes.ROOMMESSAGES_LOAD_START]: (state) => {
    return {
      ...state,
      isLoading: true,
      roomMessages: null,
      isLoaded: false
    }
  },
  [ActionTypes.ROOMMESSAGES_LOAD_SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      isLoading: false,
      roomMessages: payload,
      isLoaded: true
    }
  },
  [ActionTypes.ROOMMESSAGES_LOAD_ERROR]: (state, { payload: error }) => {
    return {
      ...state,
      isLoading: false,
      isLoaded: true,
      error
    }
  },
  [ActionTypes.ROOMMESSAGES_DUMP_MESSAGES]: () => {
    return initialState
  }
})
