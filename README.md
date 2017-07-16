
# RRX

React higher order component router

```sh
npm i -S rrx
```

## Example Usage

```js
import React from 'react'
import {
  createRouter,
  createView,
  Link
} from 'rrx'

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
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/posts/hello'>Hello Post</Link>
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

export default createRouter(App)
```

## API

### `createRouter`

Higher order component to create a wrapper Router component.
This component creates a [history][0] object and provides context for both `history` and `location`.

Router components provide these objects through context:

- `history` - the history object from [history][0]
- `location` - the location object from [history][0]

### `createView`

Creates a view component that accepts a `pattern` prop for route matching.
If the location matches the pattern, the component will render with `params` and `search` props.
If it does not match, it will not render.

View component props:
- `pattern` - a URL pattern to match against. Uses [path-to-regexp][1]

Props provided by the HOC:

- `params` - object of URL parameters from the given `pattern`.
- `search` - the `location.search` string

### `Link`

A Link component that uses the history context to transition between routes using the browser History API.

[0]: https://npmjs.com/package/history
[1]: https://npmjs.com/package/path-to-regexp

[MIT License](LICENSE.md)
