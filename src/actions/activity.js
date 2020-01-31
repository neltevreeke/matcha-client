import * as ActionTypes from '../constants/ActionTypes'
import * as usersApi from '../api/users'
import * as activityApi from '../api/activities'

export const getActivities = ({
  shouldMarkAsSeen = false
} = {}) => async dispatch => {
  dispatch({
    type: ActionTypes.ACTIVITIES_LOAD_START
  })

  try {
    const { activities } = await usersApi.getActivities()

    dispatch({
      type: ActionTypes.ACTIVITIES_LOAD_SUCCESS,
      payload: activities
    })

    if (shouldMarkAsSeen) {
      const activityIds = activities.map(a => a._id)
      dispatch(markActivitiesSeen(activityIds))
    }
  } catch (error) {
    dispatch({
      type: ActionTypes.ACTIVITIES_LOAD_ERROR,
      payload: error
    })
  }
}

export const markActivitiesSeen = activityIds => async dispatch => {
  dispatch({
    type: ActionTypes.ACTIVITIES_SEEN_START
  })

  try {
    await usersApi.markActivitiesSeen(activityIds)

    dispatch({
      type: ActionTypes.ACTIVITIES_SEEN_SUCCESS
    })
  } catch (error) {
    dispatch({
      type: ActionTypes.ACTIVITIES_SEEN_ERROR,
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
