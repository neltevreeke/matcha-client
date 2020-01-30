import * as ActionTypes from '../constants/ActionTypes'
import request from '../utils/request'

export const setNewActivity = async (dispatch, newActivity) => {
  dispatch({
    type: ActionTypes.ACTIVITIES_SET_NEW,
    payload: newActivity
  })
}

export const postNewActivity = async (dispatch, newActivity) => {
  try {
    const { activities } = await request('activities', {
      method: 'POST',
      body: newActivity
    })

    dispatch({
      type: ActionTypes.ACTIVITIES_LOAD_SUCCESS,
      payload: activities
    })
  } catch (error) {
    dispatch({
      type: ActionTypes.ACTIVITIES_LOAD_ERROR,
      error
    })
  }
}
