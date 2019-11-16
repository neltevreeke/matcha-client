import * as ActionTypes from 'constants/ActionTypes'

export const toggle = (isOpen) => {
  return {
    type: ActionTypes.MENU_TOGGLE,
    payload: isOpen
  }
}
