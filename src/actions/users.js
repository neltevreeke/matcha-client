import * as ActionTypes from 'constants/ActionTypes'
import * as usersApi from 'api/users'
import {
  getToken,
  setToken,
  clearToken
} from 'utils/token'
import * as Routes from 'constants/Routes'
import { history } from '../utils/configureStore'

export const logout = () => dispatch => {
  clearToken()

  dispatch({
    type: ActionTypes.LOGOUT
  })

  history.push(Routes.HOME)
}

const loginStart = () => {
  return {
    type: ActionTypes.LOGIN_START
  }
}

const loginSuccess = (user) => {
  return {
    type: ActionTypes.LOGIN_SUCCESS,
    payload: user
  }
}

const loginError = (error) => {
  return {
    type: ActionTypes.LOGIN_ERROR,
    payload: error
  }
}

export const login = ({
  email,
  password
}) => async dispatch => {
  dispatch(loginStart())

  try {
    const { user, token } = await usersApi.login({
      email,
      password
    })

    setToken(token)

    dispatch(loginSuccess(user))
    history.push(Routes.DASHBOARD)
  } catch (error) {
    dispatch(loginError(error))
  }
}

//
// Me
//

const meStart = () => {
  return {
    type: ActionTypes.ME_START
  }
}

const meSuccess = (user) => {
  return {
    type: ActionTypes.ME_SUCCESS,
    payload: user
  }
}

const meError = (error) => {
  return {
    type: ActionTypes.ME_ERROR,
    payload: error
  }
}

export const me = () => async dispatch => {
  const tokenFromHeader = getToken()

  if (tokenFromHeader) {
    setToken(tokenFromHeader)
  }

  dispatch(meStart())

  try {
    const user = await usersApi.me()
    dispatch(meSuccess(user))
  } catch (error) {
    dispatch(meError(error))
  }
}

//
//  update
//

const updateError = (error) => {
  return {
    type: ActionTypes.USER_UPDATE_ERROR,
    payload: error
  }
}

const updateStart = () => {
  return {
    type: ActionTypes.USER_UPDATE_START
  }
}

const updateSuccess = (user) => {
  return {
    type: ActionTypes.USER_UPDATE_SUCCESS,
    payload: user
  }
}

export const update = ({
  firstName,
  lastName,
  email,
  age,
  gender,
  biography
}) => async dispatch => {
  dispatch(updateStart())

  try {
    const { user } = await usersApi.update({
      firstName,
      lastName,
      email,
      age,
      gender,
      biography
    })

    dispatch(updateSuccess(user))
  } catch (error) {
    dispatch(updateError(error))
  }
}
