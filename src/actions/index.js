import { USERNAME, PASSWORD, AUTH_SECRET } from '../constants/Settings.js'
import history from '../utils/routerUtils'
import * as types from '../constants/ActionTypes'

export const login = data => dispatch => {
  const { username, password } = data
  if (username === USERNAME && password === PASSWORD) {
    history.push('/charts')
    dispatch({ type: types.LOGIN_SUCCESS })
    window.localStorage.setItem('authSecret', AUTH_SECRET)
    return Promise.resolve('登录成功！')
  }
  return Promise.reject(new Error('用户名密码错误！'))
}

export const logout = () => dispatch => {
  history.push('/')
  dispatch({ type: types.LOGOUT_SUCCESS })
  window.localStorage.removeItem('authSecret')
  return Promise.resolve('您已退出登录！')
}
