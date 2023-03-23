'use strict'

const cli = require('..')

describe('@lerna/cli', () => {
  it('test cli', () => {
    expect(cli()).toBe('cli')
  })
})
