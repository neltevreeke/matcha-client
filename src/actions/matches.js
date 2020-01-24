import * as ActionTypes from '../constants/ActionTypes'
import * as matchesApi from '../api/matches'

export const loadMatches = () => async dispatch => {
  dispatch({
    type: ActionTypes.MATCHES_LOAD_START
  })

  try {
    const { userMatches } = await matchesApi.getMatches()

    dispatch({
      type: ActionTypes.MATCHES_LOAD_SUCCESS,
      payload: userMatches
    })
  } catch (error) {
    dispatch({
      type: ActionTypes.MATCHES_LOAD_ERROR,
      payload: error
    })
  }
}

export const setSelectedMatch = selectedMatch => {
  return {
    type: ActionTypes.MATCHES_SET_SELECTED_MATCH,
    payload: {
      selectedMatch
    }
  }
}
