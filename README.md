
# RRX

Minimal React router using higher order components

```sh
npm i -S rrx
```

## Example Usage

```..jsx
// import React from 'react'
// import {
//   createRouter,
//   createView,
//   Link
// } from 'rrx'

const Home = createView((props) => (
  <div>
    <h1>Home</h1>
  </div>
))

const About = createView((props) => (
  <div>
    <h1>About</h1>
  </div>
))

const Post = createView(({
  params
}) => (
  <div>
    <h1>{params.title}</h1>
  </div>
))

class App extends React.Component {
  render () {
    return (
      <div>
        <nav>
          <ul>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/about'>About</Link></li>
            <li><Link href='/posts/hello'>Hello Post</Link></li>
          </ul>
        </nav>
        <Home pattern='/' />
        <About pattern='/about' />
        <Post
          pattern='/posts/:title'
          foo='bar'
        />
      </div>
    )
  }
}

const Router = createRouter(App)

const props = {
  options: {
    basename: '/rrx'
  }
}

render(<Router {...props} />)
```

## API

### createRouter

Higher order component to create a wrapper Router component.
This component creates a [history][0] object and provides context for both `history` and `location`.

Router components provide these objects through context:

- `history` - the history object from [history][0]
- `location` - the location object from [history][0]

```jsx
const App = () => (
  <div>
    <h1>Hello</h1>
  </div>
)

export default createRouter(App)
```

### createView

Creates a view component that accepts a `pattern` prop for route matching.
If the location matches the pattern, the component will render with `params` and `search` props.
If it does not match, it will not render.

View component props:
- `pattern` - a URL pattern to match against. Uses [path-to-regexp][1]

Props provided by the HOC:

- `params` - object of URL parameters from the given `pattern`.
- `search` - the `location.search` string

```jsx
const About = () => (
  <h1>About</h1>
)

export default createView(About)
```

```jsx
import About from './About'

const App = () => (
  <div>
    <About pattern='/about' />
  </div>
)

export default createRouter(App)
```

### \<Link /\>

A Link component that uses the history context to transition between routes using the browser History API.

```jsx
<Link href='/about'>
  About
</Link>
```

---

[GitHub](https://github.com/jxnblk/rrx/)
[Made by Jxnblk](http://jxnblk.com)

[0]: https://npmjs.com/package/history
[1]: https://npmjs.com/package/path-to-regexp

MIT License
