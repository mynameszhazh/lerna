'use strict'
const { describe, expect, test } = require('@jest/globals')
const xjhLerna = require('..')

describe('@lerna/xjh-lerna', () => {
  it('test xjh-lerna', () => {
    expect(xjhLerna()).toBe('xjhLerna')
  })
})
