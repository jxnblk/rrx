import React from 'react'
// import createHistory from './createHistory'
import createHistory from 'history/createBrowserHistory'
import { object } from 'prop-types'

const createRouter = (Component) => {
  class RouterComponent extends React.Component {
    constructor ({ routes, pathname }) {
      super()
      this.state = {
        history: {},
        location: {}
      }
      this.handleHistoryChange = this.handleHistoryChange.bind(this)
      this.unlisten = () => {}
    }

    getChildContext () {
      return this.state
    }

    componentDidMount () {
      const history = createHistory(this.props.options)
      const { location } = window
      this.setState({ history, location })
      this.unlisten = history.listen(this.handleHistoryChange)
    }

    componentWillUnmount () {
      this.unlisten()
    }

    handleHistoryChange (location) {
      this.setState({ location })
    }

    render () {
      return (
        <Component
          {...this.props}
          {...this.state}
        />
      )
    }
  }

  RouterComponent.childContextTypes = {
    history: React.PropTypes.object,
    location: React.PropTypes.object
  }

  RouterComponent.propTypes = {
    options: object
  }

  return RouterComponent
}

export default createRouter

