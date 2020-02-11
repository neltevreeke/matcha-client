import { createReducer } from '../utils/redux'
import * as ActionTypes from 'constants/ActionTypes'

const initialState = {
  selectedPotentialMatch: null
}

export default createReducer(initialState, {
  [ActionTypes.SET_SELECTED_POTENTIAL_MATCH]: (state, { payload: selectedPotentialMatch }) => {
    return {
      selectedPotentialMatch
    }
  }
})
