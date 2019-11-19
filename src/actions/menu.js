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
