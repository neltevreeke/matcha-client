import * as ActionTypes from 'constants/ActionTypes'
import * as usersApi from 'api/users'
import {
  getToken,
  setToken,
  clearToken
} from 'utils/token'
import * as Routes from 'constants/Routes'
import { history } from '../utils/configureStore'
import { initSockets } from '../utils/sockets'
import { getPosition } from 'utils/location'

export const logout = () => dispatch => {
  clearToken()

  dispatch({
    type: ActionTypes.LOGOUT
  })

  history.push(Routes.HOME)
}

export const login = ({
  email,
  password
}) => async dispatch => {
  dispatch({
    type: ActionTypes.LOGIN_START
  })

  try {
    const { user, token } = await usersApi.login({
      email,
      password
    })

    setToken(token)

    dispatch({
      type: ActionTypes.LOGIN_SUCCESS,
      payload: user
    })

    // here possible?

    initSockets()
    history.push(Routes.DASHBOARD)
  } catch (error) {
    dispatch({
      type: ActionTypes.LOGIN_ERROR,
      payload: error
    })
  }
}

export const me = () => async dispatch => {
  const tokenFromHeader = getToken()

  if (tokenFromHeader) {
    setToken(tokenFromHeader)
  }

  dispatch({
    type: ActionTypes.ME_START
  })

  try {
    const user = await usersApi.me()
    initSockets()

    const {
      lat,
      long
    } = await getPosition()

    const loc = [lat, long]

    dispatch(update({
      loc
    }))

    dispatch(getConnectedMatches())

    dispatch({
      type: ActionTypes.ME_SUCCESS,
      payload: {
        loc,
        ...user
      }
    })
  } catch (error) {
    dispatch({
      type: ActionTypes.ME_ERROR,
      payload: error
    })
  }
}

export const update = (body) => async dispatch => {
  dispatch({
    type: ActionTypes.USER_UPDATE_START
  })

  try {
    const { user } = await usersApi.update(body)

    dispatch({
      type: ActionTypes.USER_UPDATE_SUCCESS,
      payload: user
    })
  } catch (error) {
    dispatch({
      type: ActionTypes.USER_UPDATE_ERROR,
      payload: error
    })
  }
}

export const matchList = () => async dispatch => {
  dispatch({
    type: ActionTypes.MATCH_LIST_START
  })

  try {
    const { userMatches } = await usersApi.getMatchList()

    dispatch({
      type: ActionTypes.MATCH_LIST_SUCCESS,
      payload: userMatches
    })
  } catch (error) {
    dispatch({
      type: ActionTypes.MATCH_LIST_ERROR,
      payload: error
    })
  }
}

export const potentialMatches = () => async dispatch => {
  dispatch({
    type: ActionTypes.POTENTIAL_MATCHES_START
  })

  try {
    const { filteredPotentialMatches } = await usersApi.potentialMatches()

    dispatch({
      type: ActionTypes.POTENTIAL_MATCHES_SUCCESS,
      payload: filteredPotentialMatches
    })
  } catch (error) {
    dispatch({
      type: ActionTypes.POTENTIAL_MATCHES_ERROR,
      payload: error
    })
  }
}

export const connectedMatch = (body) => async dispatch => {
  dispatch({
    type: ActionTypes.CONNECTED_MATCH_START
  })

  try {
    const { connectedMatches } = await usersApi.connectedMatch(body)

    dispatch({
      type: ActionTypes.CONNECTED_MATCH_SUCCESS,
      payload: connectedMatches
    })
  } catch (error) {
    dispatch({
      type: ActionTypes.CONNECTED_MATCH_ERROR,
      payload: error
    })
  }
}

export const getConnectedMatches = () => async dispatch => {
  dispatch({
    type: ActionTypes.CONNECTED_MATCH_START
  })

  try {
    const { connectedMatches } = await usersApi.getConnectedMatches()

    dispatch({
      type: ActionTypes.CONNECTED_MATCH_SUCCESS,
      payload: connectedMatches
    })
  } catch (error) {
    dispatch({
      type: ActionTypes.CONNECTED_MATCH_ERROR,
      payload: error
    })
  }
}
