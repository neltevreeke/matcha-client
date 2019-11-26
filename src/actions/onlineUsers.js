import * as ActionTypes from 'constants/ActionTypes'

export const setOnlineUsers = (onlineUsers) => {
  return {
    type: ActionTypes.SET_ONLINE_USERS,
    payload: onlineUsers
  }
}
