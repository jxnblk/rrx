import React from 'react'
import createRouter from './createRouter'

const Router = ({
  history,
  location,
  ...props
}) => (
  <div {...props} />
)

export default createRouter(Router)
