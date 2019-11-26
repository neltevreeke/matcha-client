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
  },
  update: {
    isLoading: false,
    error: null
  },
  potentialMatches: {
    isLoading: false,
    error: null,
    potentialMatches: null,
    isLoaded: false
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
  },
  [ActionTypes.USER_UPDATE_START]: (state) => {
    return {
      ...state,
      update: {
        isLoading: true,
        error: null
      }
    }
  },
  [ActionTypes.USER_UPDATE_ERROR]: (state, { payload: error }) => {
    return {
      ...state,
      update: {
        isLoading: false,
        error
      }
    }
  },
  [ActionTypes.USER_UPDATE_SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      user: payload,
      update: {
        isLoading: false,
        error: null
      }
    }
  },
  [ActionTypes.POTENTIAL_MATCHES_START]: (state) => {
    return {
      ...state,
      potentialMatches: {
        isLoading: true,
        error: null,
        isLoaded: false,
        potentialMatches: null
      }
    }
  },
  [ActionTypes.POTENTIAL_MATCHES_SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      potentialMatches: {
        isLoading: false,
        error: null,
        isLoaded: true,
        potentialMatches: payload
      }
    }
  },
  [ActionTypes.POTENTIAL_MATCHES_ERROR]: (state, { payload: error }) => {
    return {
      ...state,
      potentialMatches: {
        isLoading: false,
        error,
        isLoaded: true,
        potentialMatches: null
      }
    }
  }
})
