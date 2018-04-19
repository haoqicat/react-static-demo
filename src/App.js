import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { onLoading } from 'react-static'
import store from './store'
import Main from './components/Main'
import { setPageLoading, setPageLoaded } from './actions'

onLoading(loading => {
  if (loading) {
    store.dispatch(setPageLoading())
  } else {
    store.dispatch(setPageLoaded())
  }
})

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}

export default hot(module)(App)
