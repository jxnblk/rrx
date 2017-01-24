
import React from 'react'
import getMatch from './getMatch'

const createView = (Component) => {
  class RouteComponent extends React.Component {
    render () {
      const { pattern, ...props } = this.props
      const { location } = this.context

      const match = getMatch(pattern, location)

      if (pattern && !match) return null

      return (
        <Component
          {...props}
          params={match.params}
          search={match.search}
        />
      )
    }
  }

  RouteComponent.contextTypes = {
    location: React.PropTypes.object
  }

  return RouteComponent
}

export default createView

