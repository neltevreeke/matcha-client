import { createReducer } from '../utils/redux'
import * as ActionTypes from 'constants/ActionTypes'

const initialState = {
  userDropDownMenu: {
    isOpen: false
  },
  settingsMenu: {
    isOpen: false
  }
}

export default createReducer(initialState, {
  [ActionTypes.MENU_OPEN]: (state, { payload: isOpen }) => {
    return {
      ...state,
      userDropDownMenu: {
        isOpen: true
      }
    }
  },
  [ActionTypes.MENU_CLOSE]: (state, { payload: isOpen }) => {
    return {
      ...state,
      userDropDownMenu: {
        isOpen: false
      }
    }
  },

  [ActionTypes.SETTINGS_MENU_OPEN]: (state) => {
    return {
      ...state,
      settingsMenu: {
        isOpen: true
      }
    }
  },
  [ActionTypes.SETTINGS_MENU_CLOSE]: (state) => {
    return {
      ...state,
      settingsMenu: {
        isOpen: false
      }
    }
  }
})
