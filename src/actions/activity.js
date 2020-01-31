import * as ActionTypes from '../constants/ActionTypes'
import * as usersApi from '../api/users'
import * as activityApi from '../api/activities'

export const getActivities = () => async dispatch => {
  dispatch({
    type: ActionTypes.ACTIVITIES_LOAD_START
  })

  try {
    const { activities } = await usersApi.getActivities()

    dispatch({
      type: ActionTypes.ACTIVITIES_LOAD_SUCCESS,
      payload: activities
    })
  } catch (error) {
    dispatch({
      type: ActionTypes.ACTIVITIES_LOAD_ERROR,
      payload: error
    })
  }
}

export const postNewActivity = newActivity => async dispatch => {
  dispatch({
    type: ActionTypes.ACTIVITIES_LOAD_START
  })

  try {
    const { activities } = await activityApi.newActivity(newActivity)

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
