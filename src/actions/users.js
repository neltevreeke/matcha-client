import * as ActionTypes from 'constants/ActionTypes'

export const setUser = (user) => {
  return {
    type: ActionTypes.USER_SET_USER,
    payload: user
  }
}

export const unsetUser = () => {
  return {
    type: ActionTypes.USER_UNSET_USER
  }
}
