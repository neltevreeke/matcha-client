import openSocket from 'socket.io-client'
import * as config from 'config'
import { getToken } from './token'
import { store } from '../index'
import { setOnlineUsers } from '../actions/onlineUsers'

let isInitialized = false
let socket = null

export const initSockets = () => new Promise(resolve => {
  if (isInitialized) {
    return
  }

  const token = getToken()

  socket = openSocket(config.API_URL, {
    query: {
      token
    }
  })

  socket.on('connect', () => {
    isInitialized = true
    resolve(socket)
  })

  socket.on('online-users', (response) => {
    const onlineUsers = JSON.parse(response)
    store.dispatch(setOnlineUsers(onlineUsers))
  })
})

export const sendEvent = ({ type, data }) => {
  socket.emit('event', {
    type,
    data
  })
}

export const joinRoom = roomId => {
  socket.emit('join-room', ({
    roomId
  }))
}
