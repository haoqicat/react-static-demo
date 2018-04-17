import { USERNAME, PASSWORD, AUTH_SECRET } from '../constants/Settings.js'
import history from '../utils/routerUtils'
import * as types from '../constants/ActionTypes'
import { removeTrailingSlashIfNeeded } from '../utils/commonUtils'

export const login = data => dispatch => {
  const { username, password } = data
  if (username === USERNAME && password === PASSWORD) {
    history.push('/charts')
    dispatch({ type: types.LOGIN_SUCCESS })
    if (typeof document !== 'undefined') {
      window.localStorage.setItem('authSecret', AUTH_SECRET)
    }
    return Promise.resolve('登录成功！')
  }
  return Promise.reject(new Error('用户名密码错误！'))
}

export const logout = () => dispatch => {
  history.push('/')
  dispatch({ type: types.LOGOUT_SUCCESS })
  if (typeof document !== 'undefined') {
    window.localStorage.removeItem('authSecret')
  }
  return Promise.resolve('您已退出登录！')
}

const updateSelectedIndex = link => {
  const index = removeTrailingSlashIfNeeded(link)
  return {
    type: types.UPDATE_SELECTED_INDEX,
    index,
  }
}

export const selectItem = link => dispatch => {
  history.push(link)
  dispatch(updateSelectedIndex(link))
}

export const loadSelectedInex = () => dispatch => {
  const path = history.location.pathname
  dispatch(updateSelectedIndex(path))
}

export const submitPost = () => () => {
  history.push('/posts')
}
