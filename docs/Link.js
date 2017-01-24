
import React from 'react'
import { createLink } from 'rrx'
import { Text } from 'axs'

const Link = (props) => (
  <Text
    {...props}
    is='a'
    css={css}
  />
)

const css = {
  color: 'inherit',
  fontWeight: 'bold',
  textDecoration: 'none'
}

export default createLink(Link)

