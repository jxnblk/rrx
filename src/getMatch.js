
import pathToRegexp from 'path-to-regexp'

const getMatch = (pattern = '', location = {}) => {
  const { pathname = '', search } = location
  const keys = []
  const params = {}

  const reg = pathToRegexp(pattern, keys)
  const match = reg.test(pathname)

  if (!match) return false


  const tokens = reg.exec(pathname)

  keys.forEach((key, i) => {
    params[key.name] = tokens[i + 1]
  })

  return {
    params,
    search
  }
}

export default getMatch

