import React from 'react'
import PropTypes from 'prop-types'
import getMatch from './getMatch'

const createView = (Component) => {
  class RouteComponent extends React.Component {
    render () {
      const { pattern, ...props } = this.props
      const { history, location } = this.context

      const match = getMatch(pattern, location)

      if (pattern && !match) return null

      return (
        <Component
          {...props}
          history={history}
          location={location}
          params={match.params}
          search={match.search}
        />
      )
    }
  }

  RouteComponent.contextTypes = {
    history: PropTypes.object,
    location: PropTypes.object
  }

  return RouteComponent
}

export default createView
