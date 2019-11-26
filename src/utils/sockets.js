import openSocket from 'socket.io-client'
import * as config from 'config'

let isInitialized = false

export const initSockets = () => {
  if (isInitialized) {
    return
  }

  const socket = openSocket(config.API_URL)
  isInitialized = true

  socket.on('server message', (onlineUsers) => {
    // eslint-disable-next-line no-console
    console.log(onlineUsers)
  })
}
