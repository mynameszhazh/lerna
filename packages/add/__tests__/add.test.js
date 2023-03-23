'use strict'

const add = require('..')
const { describe, expect, test } = require('@jest/globals')

describe('@lerna/xjh-lerna', () => {
  it('test xjh-lerna', () => {
    expect(add()).toBe('add')
  })
})
