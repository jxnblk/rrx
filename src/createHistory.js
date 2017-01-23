
const createHistory = () => {
  let history = {}
  let listeners = []

  history.listen = () => null
  history.push = () => null

  if (typeof document !== 'undefined') {
    const handlePopState = e => listeners.forEach(l => l(window.location))

    history = window.history

    history.listen = (listener) => {
      if (typeof listener !== 'function')  return

      listeners.push(listener)
      return () => listeners = listener.filter(item => item !== listener)
    }

    history.push = (pathname) => {
      history.pushState({}, null, pathname)
      handlePopState()
    }

    window.addEventListener('popstate', handlePopState)
  }

  return history
}

export default createHistory

