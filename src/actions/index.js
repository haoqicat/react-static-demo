import { USERNAME, PASSWORD } from '../constants/Settings.js'

export const login = data => () => {
  const { username, password } = data
  if (username === USERNAME && password === PASSWORD) {
    return Promise.resolve('登录成功！')
  }
  return Promise.reject(new Error('用户名密码错误！'))
}
