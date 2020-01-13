import openSocket from 'socket.io-client'
import * as config from 'config'
import { getToken } from './token'
import { store } from '../index'
import { setOnlineUsers } from '../actions/onlineUsers'
import { setNewRoomMessage } from '../actions/roomMessage'

let isInitialized = false
let socket = null

export const initSockets = () => {
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
  })

  socket.on('online-users', (response) => {
    const onlineUsers = JSON.parse(response)
    store.dispatch(setOnlineUsers(onlineUsers))
  })

  socket.on('received-new-message', (message) => {
    const newMessage = JSON.parse(message)
    store.dispatch(setNewRoomMessage(newMessage))
  })
}

export const sendNewMessage = ({ message, roomId }) => {
  socket.emit('new-message', {
    roomId,
    message
  })
}

export const joinRoom = roomId => {
  socket.emit('join-room', ({
    roomId
  }))
}
