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
  },
  connectedMatches: {
    error: null,
    isLoading: false,
    connectedMatches: null
  },
  resetPassword: {
    isLoading: false,
    error: null
  },
  newPassword: {
    isLoading: false,
    status: null,
    error: null
  },
  verifyAccount: {
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

  [ActionTypes.CONNECTED_MATCH_SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      connectedMatches: {
        connectedMatches: payload
      }
    }
  },

  [ActionTypes.CONNECT_MATCH_START]: (state) => {
    return {
      ...state,
      connectedMatches: {
        isLoading: true,
        error: null
      }
    }
  },
  [ActionTypes.CONNECT_MATCH_SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      connectedMatches: {
        isLoading: false,
        error: null,
        connectedMatches: payload.connectedMatches
      }
    }
  },
  [ActionTypes.CONNECT_MATCH_ERROR]: (state, { payload: error }) => {
    return {
      ...state,
      connectedMatches: {
        isLoading: false,
        error
      }
    }
  },

  [ActionTypes.DISCONNECT_MATCH_START]: (state) => {
    return {
      ...state,
      connectedMatches: {
        isLoading: true,
        error: null
      }
    }
  },
  [ActionTypes.DISCONNECT_MATCH_SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      connectedMatches: {
        isLoading: false,
        error: null,
        connectedMatches: payload.connectedMatches
      }
    }
  },
  [ActionTypes.DISCONNECT_MATCH_ERROR]: (state, { payload: error }) => {
    return {
      ...state,
      connectedMatches: {
        isLoading: false,
        error
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
  },

  [ActionTypes.PASSWORD_RESET_START]: (state) => {
    return {
      ...state,
      resetPassword: {
        isLoading: true
      }
    }
  },
  [ActionTypes.PASSWORD_RESET_SUCCESS]: (state) => {
    return {
      ...state,
      resetPassword: {
        isLoading: false
      }
    }
  },
  [ActionTypes.PASSWORD_RESET_ERROR]: (state, { payload: error }) => {
    return {
      ...state,
      resetPassword: {
        isLoading: false,
        error
      }
    }
  },

  [ActionTypes.NEW_PASSWORD_START]: (state) => {
    return {
      ...state,
      newPassword: {
        isLoading: true
      }
    }
  },
  [ActionTypes.NEW_PASSWORD_SUCCESS]: (state) => {
    return {
      ...state,
      newPassword: {
        isLoading: false,
        status: 200
      }
    }
  },
  [ActionTypes.NEW_PASSWORD_ERROR]: (state, { payload: error }) => {
    return {
      ...state,
      newPassword: {
        isLoading: false,
        error
      }
    }
  },

  [ActionTypes.VERIFY_ACCOUNT_START]: (state) => {
    return {
      ...state,
      verifyAccount: {
        isLoading: true
      }
    }
  },
  [ActionTypes.VERIFY_ACCOUNT_SUCCESS]: (state) => {
    return {
      ...state,
      verifyAccount: {
        isLoading: false
      }
    }
  },
  [ActionTypes.VERIFY_ACCOUNT_ERROR]: (state, { payload: error }) => {
    return {
      ...state,
      verifyAccount: {
        isLoading: false,
        error
      }
    }
  }
})
