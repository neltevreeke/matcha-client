import openSocket from 'socket.io-client'
import * as config from 'config'
import { getToken } from './token'
import { store } from '../index'
import { setOnlineUsers } from '../actions/onlineUsers'

let isInitialized = false

export const initSockets = () => {
  if (isInitialized) {
    return
  }

  const token = getToken()

  const socket = openSocket(config.API_URL, {
    query: {
      token
    }
  })

  isInitialized = true

  socket.on('server message', (response) => {
    const onlineUsers = JSON.parse(response)

    store.dispatch(setOnlineUsers(onlineUsers))
  })
}
