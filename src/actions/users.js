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
import { toast } from 'react-toastify'
import * as EventType from 'constants/EventType'

import styles from '../styles/toastify.scss'
import { store } from '../index'
import { setNewRoomMessage } from './roomMessage'

export const logout = () => dispatch => {
  clearToken()

  dispatch({
    type: ActionTypes.LOGOUT
  })

  history.push(Routes.HOME)
}

const setupSocketNotifications = (socket) => {
  socket.on('event-receive', (event) => {
    const {
      type,
      data,
      message
    } = JSON.parse(event)

    const {
      firstName,
      lastName
    } = data

    if (type === EventType.EVENT_TYPE_PROFILE_VIEW) {
      toast.info(firstName + ' ' + lastName + ' viewed your profile', {
        className: styles.toastify
      })
    } else if (type === EventType.EVENT_TYPE_CONNECT) {
      toast.info(firstName + ' ' + lastName + ' connected you', {
        className: styles.toastify
      })
    } else if (type === EventType.EVENT_TYPE_MATCH) {
      toast.info('You have a new match with ' + firstName + ' ' + lastName, {
        className: styles.toastify
      })
    } else if (type === EventType.EVENT_TYPE_UNMATCH) {
      toast.info(firstName + ' ' + lastName + ' unmatched you', {
        className: styles.toastify
      })
    } else if (type === EventType.EVENT_TYPE_MESSAGE) {
      toast.info(firstName + ' ' + lastName + ' has send you a new message', {
        className: styles.toastify
      })

      store.dispatch(setNewRoomMessage(message))
    }
  })
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

    const socket = await initSockets()
    setupSocketNotifications(socket)

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

    const socket = await initSockets()
    setupSocketNotifications(socket)

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
