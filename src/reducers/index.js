import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import user from './user'
import menu from './menu'
import onlineUsers from './onlineUsers'
import matches from './matches'

export default (history) => combineReducers({
  router: connectRouter(history),
  user,
  menu,
  onlineUsers,
  matches
})
