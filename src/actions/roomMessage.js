import * as ActionTypes from 'constants/ActionTypes'
import * as messagesApi from '../api/roomMessages'

export const setNewRoomMessage = (message) => {
  return {
    type: ActionTypes.SET_NEW_ROOMMESSAGE,
    payload: message
  }
}

export const loadRoomMessages = (roomId) => async dispatch => {
  dispatch({
    type: ActionTypes.ROOMMESSAGES_LOAD_START
  })

  try {
    const res = await messagesApi.getRoomMessages(roomId)

    dispatch({
      type: ActionTypes.ROOMMESSAGES_LOAD_SUCCESS,
      payload: res
    })
  } catch (error) {
    dispatch({
      type: ActionTypes.ROOMMESSAGES_LOAD_ERROR,
      payload: error
    })
  }
}
