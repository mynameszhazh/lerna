'use strict'
const { describe, expect, test } = require('@jest/globals')
const init = require('..')

describe('@lerna/init', () => {
  it('test init', () => {
    expect(init()).toBe('init')
  })
})
