
import React from 'react'
import {
  createRouter,
  createView,
  Link,
} from 'hoc-router'
import Index from './Index'
import About from './About'
import Post from './Post'

const Contact = createView(() => (
  <div>
    <h1>Contact</h1>
  </div>
))

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Hello</h1>
        <nav>
          <Link href='/'>Home</Link>
          <Link href='/posts/hello'>Hello Post</Link>
          <Link href='/posts/two'>Post Two</Link>
          <Link href='/about'>About</Link>
          <Link href='/contact'>Contact</Link>
        </nav>
        <Index pattern='/' />
        <About pattern='/about' />
        <Contact pattern='/contact' />
        <Post
          pattern='/posts/:id'
          foo='bar'
        />
      </div>
    )
  }
}

export default createRouter(App)

