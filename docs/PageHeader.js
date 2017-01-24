
import React from 'react'
import { Box, Text } from 'axs'

const PageHeader = ({
  title
}) => (
  <Box p3 css={css.root}>
    <Text is='h2'>{title}</Text>
  </Box>
)

const css = {
  root: {
    color: '#fff',
    backgroundColor: '#000'
  }
}

export default PageHeader

