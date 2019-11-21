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
  tags: {
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
  [ActionTypes.USER_ADD_INTEREST_TAG_SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      user: payload,
      tags: {
        isLoading: false,
        error: null
      }
    }
  },
  [ActionTypes.USER_ADD_INTEREST_TAG_ERROR]: (state, { payload: error }) => {
    return {
      ...state,
      tags: {
        isLoading: false,
        error
      }
    }
  },
  [ActionTypes.USER_ADD_INTEREST_TAG_START]: (state) => {
    return {
      ...state,
      tags: {
        isLoading: true,
        error: null
      }
    }
  }
})
