import { USERNAME, PASSWORD } from '../constants/Settings.js'
import history from '../utils/routerUtils'

export const login = data => () => {
  const { username, password } = data
  if (username === USERNAME && password === PASSWORD) {
    history.push('/charts')
    return Promise.resolve('登录成功！')
  }
  return Promise.reject(new Error('用户名密码错误！'))
}

export const logout = () => () => {
  history.push('/')
  return Promise.resolve('您已退出登录！')
}
