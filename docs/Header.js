
import React from 'react'
import { Box, Text } from 'axs'
import Link from './Link'

const Header = () => (
  <Box is='header'
    p3
    css={css.root}>
    <Text is='h1'>Rrx</Text>
    <nav>
      <Link
        href='/'
        children='Home'
        mr2
      />
      <Link
        href='/usage'
        children='Usage'
        mr2
      />
      <Link
        href='/concepts'
        children='Concepts'
        mr2
      />
      <Link
        href='/examples'
        children='Examples'
        mr2
      />
      <Link
        href='/api'
        children='API'
        mr2
      />
    </nav>
  </Box>
)

Header.contextTypes = {
  location: React.PropTypes.object
}

const css = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    minHeight: 256,
    color: 'white',
    backgroundColor: 'black'
  }
}

export default Header

