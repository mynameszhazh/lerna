'use strict'

const cli = require('..')
const { describe, expect, test } = require('@jest/globals')

describe('@lerna/cli', () => {
  it('test cli', () => {
    expect(cli()).toBe('cli')
  })
})
