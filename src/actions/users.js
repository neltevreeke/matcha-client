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
import ToastifyBody from '../components/ToastifyBody/ToastifyBody'
import React from 'react'
import { getActivities } from 'actions/activity'

export const logout = () => dispatch => {
  clearToken()

  dispatch({
    type: ActionTypes.LOGOUT
  })

  history.push(Routes.HOME)
}

const setupSocketNotifications = (socket, dispatch) => {
  socket.on('event-receive', (event) => {
    const {
      type,
      data,
      message
    } = JSON.parse(event)

    toast.info(
      <ToastifyBody
        type={type}
        data={data}
        dispatch={dispatch}
      />, {
        className: styles.toastify
      })

    if (type === EventType.EVENT_TYPE_MESSAGE) {
      store.dispatch(setNewRoomMessage(message))
    } else {
      store.dispatch(getActivities())
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
    setupSocketNotifications(socket, dispatch)

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
    setupSocketNotifications(socket, dispatch)

    const {
      lat,
      long
    } = await getPosition()

    const coordinates = [lat, long]

    dispatch(update({
      loc: {
        type: 'Point',
        coordinates
      },
      lastSeen: await Date.now()
    }))

    dispatch(getConnectedMatches())
    dispatch(getActivities())

    dispatch({
      type: ActionTypes.ME_SUCCESS,
      payload: {
        loc: {
          type: 'Point',
          coordinates
        },
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

export const potentialMatches = ({ sortBy }) => async dispatch => {
  dispatch({
    type: ActionTypes.POTENTIAL_MATCHES_START
  })

  try {
    const { filteredPotentialMatches } = await usersApi.potentialMatches({
      sortBy
    })

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

export const matchConnect = userId => async dispatch => {
  dispatch({
    type: ActionTypes.CONNECT_MATCH_START,
    payload: {
      userId
    }
  })

  try {
    const { connectedMatches, userMatches } = await usersApi.matchConnect(userId)

    dispatch({
      type: ActionTypes.CONNECT_MATCH_SUCCESS,
      payload: {
        connectedMatches,
        userMatches
      }
    })
  } catch (error) {
    dispatch({
      type: ActionTypes.CONNECT_MATCH_ERROR,
      payload: error
    })
  }
}

export const matchDisconnect = ({ userId, room }) => async dispatch => {
  dispatch({
    type: ActionTypes.DISCONNECT_MATCH_START,
    payload: {
      userId,
      room
    }
  })

  try {
    const { connectedMatches, userMatches } = await usersApi.matchDisconnect({
      userId,
      room
    })

    dispatch({
      type: ActionTypes.DISCONNECT_MATCH_SUCCESS,
      payload: {
        connectedMatches,
        userMatches
      }
    })
  } catch (error) {
    dispatch({
      type: ActionTypes.DISCONNECT_MATCH_ERROR,
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
