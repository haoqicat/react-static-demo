import { combineReducers } from 'redux'
import * as types from '../constants/ActionTypes'

let initAuthState = false

if (typeof document !== 'undefined') {
  initAuthState = !!window.localStorage.getItem('authSecret')
}

const isAuthenticated = (state = initAuthState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return true
    case types.LOGOUT_SUCCESS:
      return false
    default:
      return state
  }
}

const selectedIndex = (state = '/charts', action) => {
  switch (action.type) {
    case types.UPDATE_SELECTED_INDEX:
      return action.index
    default:
      return state
  }
}

const isPageLoading = (state = false, action) => {
  switch (action.type) {
    case types.SET_PAGE_LOADING:
      return true
    case types.PAGE_LOADED:
      return false
    default:
      return state
  }
}

export default combineReducers({
  isAuthenticated,
  selectedIndex,
  isPageLoading,
})
