
import React from 'react'

const withLink = (Component) => {
  class Link extends React.Component {
    constructor () {
      super()
      this.onClick = this.onClick.bind(this)
    }

    onClick (href) {
      const { history } = this.context

      return (e) => {
        e.preventDefault()
        history.push(href)
      }
    }

    render () {
      const {
        href,
        ...props
      } = this.props

      return (
        <Component
          {...props}
          href={href}
          onClick={this.onClick(href)}
        />
      )
    }
  }

  Link.contextTypes = {
    history: React.PropTypes.object,
    location: React.PropTypes.object
  }

  return Link
}

export default withLink

