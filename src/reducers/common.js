import { combineReducers } from 'redux'
import * as types from '../constants/ActionTypes'

const isAuthenticated = (state = false, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return true
    default:
      return state
  }
}

export default combineReducers({
  isAuthenticated,
})
