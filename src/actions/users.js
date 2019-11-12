import * as ActionTypes from 'constants/ActionTypes'

export const setUser = ({
  user,
  token
}) => {
  return {
    type: ActionTypes.USER_SET_USER,
    payload: {
      user,
      token
    }
  }
}
