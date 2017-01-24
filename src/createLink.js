
import React from 'react'

const createLink = (Component) => {
  class Link extends React.Component {
    constructor () {
      super()
      this.onClick = this.onClick.bind(this)
    }

    onClick (href) {
      const { history } = this.context
      const { scroll } = this.props

      return (e) => {
        e.preventDefault()
        history.push(href)
        if (scroll !== false) {
          window.scrollTo(0, 0)
        }
      }
    }

    render () {
      const {
        href,
        scroll,
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

export default createLink

