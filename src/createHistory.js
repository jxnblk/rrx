import createBrowserHistory from 'history/createBrowserHistory'

const noop = () => {}

const createHistory = (options) => {
  let history = {}
  history.listen = noop
  history.push = noop

  if (typeof document !== 'undefined') {
    history = createBrowserHistory(options)
  }

  return history
}

export default createHistory
