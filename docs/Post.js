
import React from 'react'
import { createView } from 'hoc-router'
import Debug from './Debug'

const Post = (props) => (
  <div>
    <h1>{props.params.id}</h1>
    <Debug {...props} />
  </div>
)

export default createView(Post)

