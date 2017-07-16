import React from 'react'
import {
  createView
} from 'rrx'

const MultiMatch = ({ params }) => (
  <div>
    <h1>Multi Match</h1>
    <pre>{JSON.stringify(params)}</pre>
  </div>
)

export default createView(MultiMatch)
