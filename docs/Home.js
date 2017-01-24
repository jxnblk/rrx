
import React from 'react'
import { createView } from 'rrx'
import PageHeader from './PageHeader'

const Home = (props) => (
  <div>
    <PageHeader title='Home' />
  </div>
)

export default createView(Home)

