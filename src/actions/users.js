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
import * as ActivityType from 'constants/ActivityType'

import styles from '../styles/toastify.scss'
import { store } from '../index'
import { setNewRoomMessage } from './roomMessage'
import ToastifyBody from '../components/ToastifyBody/ToastifyBody'
import React from 'react'
import {
  getActivities,
  postNewActivity
} from 'actions/activity'

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

    if (type === EventType.EVENT_TYPE_BLOCK) {
      dispatch(potentialMatches({
        sortBy: null
      }))

      dispatch(setSelectedPotentialMatch(null))

      return
    } else if (type === EventType.EVENT_TYPE_UNBLOCK) {
      dispatch(potentialMatches({
        sortBy: null
      }))

      return
    }

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

export const verifyAccount = (token) => async dispatch => {
  dispatch({
    type: ActionTypes.VERIFY_ACCOUNT_START
  })

  try {
    await usersApi.verifyAccount(token)

    dispatch({
      type: ActionTypes.VERIFY_ACCOUNT_SUCCESS
    })

    history.push(Routes.HOME)
  } catch (error) {
    dispatch({
      type: ActionTypes.VERIFY_ACCOUNT_ERROR,
      payload: error
    })
  }
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

export const postNewPassword = (newPassword) => async dispatch => {
  dispatch({
    type: ActionTypes.NEW_PASSWORD_START
  })

  try {
    await usersApi.newPassword(newPassword)

    dispatch({
      type: ActionTypes.NEW_PASSWORD_SUCCESS
    })
  } catch (error) {
    dispatch({
      type: ActionTypes.NEW_PASSWORD_ERROR,
      payload: error
    })
  }
}

export const postResetPassword = (email) => async dispatch => {
  dispatch({
    type: ActionTypes.PASSWORD_RESET_START
  })

  try {
    await usersApi.resetPassword(email)

    dispatch({
      type: ActionTypes.PASSWORD_RESET_SUCCESS
    })
  } catch (error) {
    dispatch({
      type: ActionTypes.PASSWORD_RESET_ERROR,
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
    dispatch(getBlockedUsers())
    dispatch(getMatchReport())

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

export const blockMatch = userId => async dispatch => {
  dispatch({
    type: ActionTypes.BLOCK_MATCH_START,
    payload: {
      userId
    }
  })

  try {
    const { blockedUsers } = await usersApi.postBlockMatch(userId)

    dispatch(potentialMatches({
      sortBy: null
    }))

    dispatch(postNewActivity({
      type: ActivityType.ACTIVITY_TYPE_BLOCK,
      targetUserId: userId
    }))

    dispatch({
      type: ActionTypes.BLOCK_MATCH_SUCCESS,
      payload: blockedUsers
    })
  } catch (error) {
    dispatch({
      type: ActionTypes.BLOCK_MATCH_ERROR,
      payload: error
    })
  }
}

export const deleteBlockedUser = userId => async dispatch => {
  dispatch({
    type: ActionTypes.BLOCK_MATCH_START,
    payload: {
      blockedUserId: userId
    }
  })

  try {
    const { blockedUsers } = await usersApi.deleteBlockedUser(userId)

    dispatch(postNewActivity({
      type: ActivityType.ACTIVITY_TYPE_UNBLOCK,
      targetUserId: userId
    }))

    dispatch({
      type: ActionTypes.BLOCK_MATCH_SUCCESS,
      payload: blockedUsers
    })
  } catch (error) {
    dispatch({
      type: ActionTypes.BLOCK_MATCH_ERROR,
      payload: error
    })
  }
}

export const getBlockedUsers = () => async dispatch => {
  dispatch({
    type: ActionTypes.BLOCK_MATCH_START
  })

  try {
    const { blockedUsers } = await usersApi.getBlockedUsers()

    dispatch({
      type: ActionTypes.BLOCK_MATCH_SUCCESS,
      payload: blockedUsers
    })
  } catch (error) {
    dispatch({
      type: ActionTypes.BLOCK_MATCH_ERROR,
      payload: error
    })
  }
}

export const getMatchReport = () => async dispatch => {
  dispatch({
    type: ActionTypes.REPORT_MATCH_START
  })

  try {
    const { reportedUsers } = await usersApi.getMatchReport()

    dispatch({
      type: ActionTypes.REPORT_MATCH_SUCCESS,
      payload: reportedUsers
    })
  } catch (error) {
    dispatch({
      type: ActionTypes.REPORT_MATCH_ERROR,
      payload: error
    })
  }
}

export const matchReport = userId => async dispatch => {
  dispatch({
    type: ActionTypes.REPORT_MATCH_START,
    payload: {
      userId
    }
  })

  try {
    const { reportedUsers } = await usersApi.postMatchReport(userId)

    dispatch({
      type: ActionTypes.REPORT_MATCH_SUCCESS,
      payload: reportedUsers
    })
  } catch (error) {
    dispatch({
      type: ActionTypes.REPORT_MATCH_ERROR,
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

export const setSelectedPotentialMatch = (potentialMatch) => async dispatch => {
  dispatch({
    type: ActionTypes.SET_SELECTED_POTENTIAL_MATCH,
    payload: potentialMatch
  })
}
