
import React from 'react'
import {
  createRouter,
  createView,
  Link,
} from 'rrx'
import { Box } from 'axs'
import Header from './Header'
import Home from './Home'
import Usage from './Usage'

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Box css={css.main}>
          <Home pattern='/' />
          <Usage pattern='/usage' />
        </Box>
      </div>
    )
  }
}

const css = {
  main: {
    minHeight: '80vh'
  }
}

export default createRouter(App)

