
import React from 'react'
import createView from './createView'

const View = ({
  params,
  search,
  ...props
}) => (
  <div {...props} />
)

export default createView(View)

