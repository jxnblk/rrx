import test from 'ava'
import React from 'react'
import { create } from 'react-test-renderer'
import {
  createRouter,
  createView,
  createLink,
  Router,
  View,
  Link,
  getMatch,
} from './src'

test('exports higher order components', t => {
  t.is(typeof createRouter, 'function')
  t.is(typeof createView, 'function')
  t.is(typeof createLink, 'function')
})

test('exports base components', t => {
  const a = create(<Router />).toJSON()
  const b = create(<View />).toJSON()
  const c = create(<Link />).toJSON()
  t.snapshot(a)
  t.snapshot(b)
  t.snapshot(c)
})

test('creates a Router component', t => {
  const R = createRouter('div')
  const a = create(<R />).toJSON()
  t.snapshot(a)
})

test('creates a View component', t => {
  const V = createView('div')
  const a = create(<V />).toJSON()
  t.snapshot(a)
})

test('creates a Link component', t => {
  const L = createLink('a')
  const a = create(<L />).toJSON()
  t.snapshot(a)
})
