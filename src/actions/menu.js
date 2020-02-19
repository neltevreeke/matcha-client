import * as ActionTypes from 'constants/ActionTypes'

export const menuOpen = (isOpen) => {
  return {
    type: ActionTypes.MENU_OPEN,
    payload: isOpen
  }
}

export const menuClose = (isOpen) => {
  return {
    type: ActionTypes.MENU_CLOSE,
    payload: isOpen
  }
}

export const settingsMenuOpen = () => {
  return {
    type: ActionTypes.SETTINGS_MENU_OPEN
  }
}

export const settingsMenuClose = () => {
  return {
    type: ActionTypes.SETTINGS_MENU_CLOSE
  }
}
