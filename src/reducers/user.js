import { createReducer } from '../utils/redux'
import * as ActionTypes from 'constants/ActionTypes'

const initialState = {
  user: null,
  login: {
    isLoading: false,
    error: null
  },
  me: {
    isLoaded: false,
    isLoading: false,
    error: null
  }
}

export default createReducer(initialState, {
  [ActionTypes.LOGIN_START]: (state) => {
    return {
      ...state,
      login: {
        isLoading: true,
        error: null
      }
    }
  },
  [ActionTypes.LOGIN_SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      user: payload,
      login: {
        isLoading: false
      }
    }
  },
  [ActionTypes.LOGIN_ERROR]: (state, { payload: error }) => {
    return {
      ...state,
      login: {
        isLoading: false,
        error
      }
    }
  },

  [ActionTypes.ME_START]: (state) => {
    return {
      ...state,
      me: {
        isLoaded: false,
        isLoading: true,
        error: null
      }
    }
  },
  [ActionTypes.ME_SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      user: payload,
      me: {
        isLoaded: true,
        isLoading: false
      }
    }
  },
  [ActionTypes.ME_ERROR]: (state, { payload: error }) => {
    return {
      ...state,
      me: {
        isLoaded: true,
        isLoading: false,
        error
      }
    }
  },
  [ActionTypes.LOGOUT]: (state) => {
    return {
      ...state,
      user: null
    }
  }
})
