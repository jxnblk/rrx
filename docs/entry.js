import React from 'react'
import { render } from 'react-dom'
import App from './App'

const props = {
  options: {
    basename: '/rrx'
  }
}

render(<App {...props} />, app)
